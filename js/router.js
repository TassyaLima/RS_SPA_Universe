
export class Router {
    routes = {}

    add(routeName, page, script) {
        this.routes[routeName] = {page: page, script: script}
    }

    route(event) {
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle()
    }
    
    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]
        fetch(route.page)
        .then(data => data.text())
        .then(html => {
          document.querySelector('.app').innerHTML = html  
        })

        window.pageContext = this.routes[pathname].script
    }
    


}
