/**
 * 前端路由模拟实现
 */
import HashRouter from './hashRouter.js'
import HistoryRouter from './historyRouter.js'
import Lifecycle from './lifecycle.js'
const ROUTER_MODE = {
  hash:'hash',
  history:'history'
}
export default class Router extends Lifecycle {
  constructor({ mode ='hash',routes,render= ()=>{} }) {
    super();
    this.renderHook.push(render)
    this.router = ROUTER_MODE.hash === mode?new HashRouter(this,routes):new HistoryRouter(this,routes);
  }
 
  push(path) {
    let nextRoute = this.router.getRouter(path);
    if(this.beforeHook.length) {
      this.runHook(this.router.currentRoute,nextRoute, () => { 
        this.router.push(path)
      })
    } else {
      this.router.push(path)
    }
    //this.updateRouter(this.router.currentRouter,nextRouter, () => { 
    //  this.router.push(path)
    //})
  }
  replace(path) {
    let nextRoute = this.router.getRouter(path);
    if(this.beforeHook.length) {
      this.runHook(this.router.currentRoute,nextRoute, () => { 
        this.router.replace(path)
      })
    } else {
      this.router.replace(path)
    }
  }
  back () {
    this.router.back()
  }
  go (index) {
    this.router.go(index)
  }
}