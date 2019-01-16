import BaseRouter from './baseRouter.js';

export default class HashRouter extends BaseRouter {
  constructor(router, routes) {
    super(router, routes);
    //this.router = props.router;
   // this.routes = routes;

    this.run();   
    this.bind();
  }

  bind() {
    // 监听hash变化
    window.addEventListener('hashchange', e => {
      this.run();
    });
  }

  getCurrentPath() {
    const hash = window.location.hash;
    return hash ? hash.slice(1) : '/';
  }

  //获取完整url
  getLocationByPath(path) {
    const href = window.location.href;
    const domain = href.split('#');
    return `${domain[0]}#${path}`;
  }

  push (path) {
    location.hash = '#'+path;
    
  }

  replace (path) {
    //location.hash = '#'+state;
    window.location.replace(this.getLocationByPath(path));
  }

  back () {
    window.history.back()
  }

  go(index) {
    window.history.go(index)
  }
}