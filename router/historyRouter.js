import BaseRouter from './baseRouter.js';

export default class HistoryRouter extends BaseRouter {
  constructor(router, routes) {
    super(router, routes);
    //this.router = router;
    //this.routes = routes;
    this.run();
    this.bind();
  }

  bind () {
    // 监听history状态
    window.addEventListener('popstate',(e) => {
      this.run();
    })
  }

  getCurrentPath() {
    const path = window.location.pathname;
    return path ? path : '/';
  }

  push(path) {
    history.pushState(null,null,path);
    // 由于pushState不会触发popstate，所以手动触发
    this.run();
  }

  replace(path) {
    history.replaceState(null,null,path);
    // 由于replaceState不会触发popstate，所以手动触发
    this.run();
  }

  back () {
    window.history.back();
  }

  go(index) {
    window.history.go(index);
  }
}