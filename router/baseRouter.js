/**
 * BaseRouter 基本路由
 * 定义匹配路由的具体方法
 * 对应的渲染方法
 */
export default class BaseRouter {
  constructor(router, routes) {
    this.router = router;
    this.routes = routes;
    this.routesTree = {};
    this.mapPath(this.routes);
    console.log('BaseRouter', this.routesTree)
    this.currentRoute = null;
  }

  mapPath (routes, root) {
    if(!routes||routes.length === 0) return []
    let parentPath ='';
    if(root) {
      parentPath = root;
    }
    this.routesTree = routes.reduce((initTree, route) => {
      let completePath = parentPath?`${parentPath}/${route.path}`:route.path;
      initTree[`${completePath}`] = route;
      if(route.children&&route.children.length) {
        this.mapPath(route.children,route.path)
      }
      return initTree;
    },this.routesTree) 
  }

  match(path) {
    return this.routesTree[path]||this.routesTree['*']||{ path:'*',name:'404',component:'404'};
  }
 
  run() {
    this.render(this.getCurrentPath());
  }

  getCurrentPath () {}

  getRouter(path) {
    return this.match(path)
  }

  render (path) {
    console.log('BaseRouter render');
    let route = this.match(path)
    let component =  route.component
    this.currentRoute = route;
    this.router.renderHook.forEach((fn) => fn(route,component,this.router))
  }
}