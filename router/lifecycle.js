const ROUTER_STATE = {
  pendding:'pendding',
  finish:'finish',
}

export default class {
  constructor () {
    this.state = ROUTER_STATE.pendding;
    this.beforeHook = [];
    this.afterHook = [];
    this.renderHook = [];
  }
  use (fn) {
    this.renderHook.push(fn);
    return this;
  }
  beforeEach (fn) {
    this.beforeHook.push(fn);
    return () => {
      const i =  this.beforeHook.indexOf(fn)
      if (i > -1)  this.beforeHook.splice(i, 1)
    }
  }
  afterEach(fn) {
    this.afterHook.push(fn);
    return () => {
      const i = this.afterHook.indexOf(fn)
      if (i > -1) this.afterHook.splice(i, 1)
    }
  }

  runHook(form,to,next) {
    this.beforeHook.forEach(fn => fn.call(this,form,to,next))
  }
 
}