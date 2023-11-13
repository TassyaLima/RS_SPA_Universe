import { Router } from "./router.js"
import { Home } from "./home.js"


const router = new Router()

router.add("/", "/pages/home.html", new Home())
router.add("/universe", "/pages/universe.html", null)
router.add("/explorer", "/pages/explorer.html", null)
router.add(404, "/pages/404.html", null)

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()


let atualPage = window.location.href.split('/').pop()
if(atualPage == '') {
    atualPage = 'home'
}

const menuAtivo = document.getElementById(`menu-${atualPage.split('.')[0]}`);

if (menuAtivo) {
    menuAtivo.classList.add('menu-ativo');
}

console.log(menuAtivo)