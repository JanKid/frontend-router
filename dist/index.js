/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _router = __webpack_require__(/*! ./router/router.js */ \"./router/router.js\");\n\nvar _router2 = _interopRequireDefault(_router);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar on = function () {\n  return function (els, event, fn) {\n    if (!els) return;\n    if (els instanceof NodeList || els instanceof HTMLCollection) {\n      [].forEach.call(els, function (el) {\n        on(el, event, fn);\n      });\n    } else {\n      els.addEventListener(event, fn, false);\n    }\n  };\n}();\n\nvar routes = [{\n  path: '/',\n  name: 'site',\n  component: '首页'\n}, {\n  path: '/test',\n  name: 'test',\n  component: '测试也',\n  children: [{\n    path: 'look',\n    name: 'testLook',\n    component: '测试孩子路由'\n  }, {\n    path: 'look2',\n    name: 'testLook2',\n    component: '测试孩子路由2121212121'\n  }]\n}, {\n  path: '/about',\n  name: 'about',\n  component: function component() {\n    return '关于路由介绍';\n  }\n}, {\n  path: '*',\n  name: '404',\n  component: '404'\n}];\n\nvar view = document.querySelector('.router-view');\nvar router = new _router2.default({\n  // mode:'history',\n  routes: routes,\n  render: function render(route, component) {\n    if (typeof component === 'string') {\n      view.innerHTML = component;\n    } else if (typeof component === 'function') {\n      view.innerHTML = component(route);\n    } else {\n      // 处理真正组件\n      view.innerHTML = component;\n    }\n  }\n});\n\n// 添加路由中间件，例如在某些路由执行一些操作\nrouter.use(function (route, component) {\n  // console.log('test router');\n  console.log('test router2');\n});\n// 控制是否进入下一个路由 hook\nrouter.beforeEach(function (form, to, next) {\n  console.log(form, to);\n  setTimeout(function () {\n    // next必须调用\n    next();\n  }, 5000);\n});\n\nwindow.router = router;\n\nvar links = document.querySelectorAll('.router-link');\non(links, 'click', function (e) {\n  e.preventDefault();\n  router.push(e.target.getAttribute('href'));\n});\n\nconsole.log('test router');\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./router/baseRouter.js":
/*!******************************!*\
  !*** ./router/baseRouter.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\r\n * BaseRouter 基本路由\r\n * 定义匹配路由的具体方法\r\n * 对应的渲染方法\r\n */\nvar BaseRouter = function () {\n  function BaseRouter(router, routes) {\n    _classCallCheck(this, BaseRouter);\n\n    this.router = router;\n    this.routes = routes;\n    this.routesTree = {};\n    this.mapPath(this.routes);\n    console.log('BaseRouter', this.routesTree);\n    this.currentRoute = null;\n  }\n\n  _createClass(BaseRouter, [{\n    key: 'mapPath',\n    value: function mapPath(routes, root) {\n      var _this = this;\n\n      if (!routes || routes.length === 0) return [];\n      var parentPath = '';\n      if (root) {\n        parentPath = root;\n      }\n      this.routesTree = routes.reduce(function (initTree, route) {\n        var completePath = parentPath ? parentPath + '/' + route.path : route.path;\n        initTree['' + completePath] = route;\n        if (route.children && route.children.length) {\n          _this.mapPath(route.children, route.path);\n        }\n        return initTree;\n      }, this.routesTree);\n    }\n  }, {\n    key: 'match',\n    value: function match(path) {\n      return this.routesTree[path] || this.routesTree['*'] || { path: '*', name: '404', component: '404' };\n    }\n  }, {\n    key: 'run',\n    value: function run() {\n      this.render(this.getCurrentPath());\n    }\n  }, {\n    key: 'getCurrentPath',\n    value: function getCurrentPath() {}\n  }, {\n    key: 'getRouter',\n    value: function getRouter(path) {\n      return this.match(path);\n    }\n  }, {\n    key: 'render',\n    value: function render(path) {\n      var _this2 = this;\n\n      console.log('BaseRouter render');\n      var route = this.match(path);\n      var component = route.component;\n      this.currentRoute = route;\n      this.router.renderHook.forEach(function (fn) {\n        return fn(route, component, _this2.router);\n      });\n    }\n  }]);\n\n  return BaseRouter;\n}();\n\nexports.default = BaseRouter;\n\n//# sourceURL=webpack:///./router/baseRouter.js?");

/***/ }),

/***/ "./router/hashRouter.js":
/*!******************************!*\
  !*** ./router/hashRouter.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _baseRouter = __webpack_require__(/*! ./baseRouter.js */ \"./router/baseRouter.js\");\n\nvar _baseRouter2 = _interopRequireDefault(_baseRouter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar HashRouter = function (_BaseRouter) {\n  _inherits(HashRouter, _BaseRouter);\n\n  function HashRouter(router, routes) {\n    _classCallCheck(this, HashRouter);\n\n    //this.router = props.router;\n    // this.routes = routes;\n\n    var _this = _possibleConstructorReturn(this, (HashRouter.__proto__ || Object.getPrototypeOf(HashRouter)).call(this, router, routes));\n\n    _this.run();\n    _this.bind();\n    return _this;\n  }\n\n  _createClass(HashRouter, [{\n    key: 'bind',\n    value: function bind() {\n      var _this2 = this;\n\n      // 监听hash变化\n      window.addEventListener('hashchange', function (e) {\n        _this2.run();\n      });\n    }\n  }, {\n    key: 'getCurrentPath',\n    value: function getCurrentPath() {\n      var hash = window.location.hash;\n      return hash ? hash.slice(1) : '/';\n    }\n\n    //获取完整url\n\n  }, {\n    key: 'getLocationByPath',\n    value: function getLocationByPath(path) {\n      var href = window.location.href;\n      var domain = href.split('#');\n      return domain[0] + '#' + path;\n    }\n  }, {\n    key: 'push',\n    value: function push(path) {\n      location.hash = '#' + path;\n    }\n  }, {\n    key: 'replace',\n    value: function replace(path) {\n      //location.hash = '#'+state;\n      window.location.replace(this.getLocationByPath(path));\n    }\n  }, {\n    key: 'back',\n    value: function back() {\n      window.history.back();\n    }\n  }, {\n    key: 'go',\n    value: function go(index) {\n      window.history.go(index);\n    }\n  }]);\n\n  return HashRouter;\n}(_baseRouter2.default);\n\nexports.default = HashRouter;\n\n//# sourceURL=webpack:///./router/hashRouter.js?");

/***/ }),

/***/ "./router/historyRouter.js":
/*!*********************************!*\
  !*** ./router/historyRouter.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _baseRouter = __webpack_require__(/*! ./baseRouter.js */ \"./router/baseRouter.js\");\n\nvar _baseRouter2 = _interopRequireDefault(_baseRouter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar HistoryRouter = function (_BaseRouter) {\n  _inherits(HistoryRouter, _BaseRouter);\n\n  function HistoryRouter(router, routes) {\n    _classCallCheck(this, HistoryRouter);\n\n    //this.router = router;\n    //this.routes = routes;\n    var _this = _possibleConstructorReturn(this, (HistoryRouter.__proto__ || Object.getPrototypeOf(HistoryRouter)).call(this, router, routes));\n\n    _this.run();\n    _this.bind();\n    return _this;\n  }\n\n  _createClass(HistoryRouter, [{\n    key: 'bind',\n    value: function bind() {\n      var _this2 = this;\n\n      // 监听history状态\n      window.addEventListener('popstate', function (e) {\n        _this2.run();\n      });\n    }\n  }, {\n    key: 'getCurrentPath',\n    value: function getCurrentPath() {\n      var path = window.location.pathname;\n      return path ? path : '/';\n    }\n  }, {\n    key: 'push',\n    value: function push(path) {\n      history.pushState(null, null, path);\n      // 由于pushState不会触发popstate，所以手动触发\n      this.run();\n    }\n  }, {\n    key: 'replace',\n    value: function replace(path) {\n      history.replaceState(null, null, path);\n      // 由于replaceState不会触发popstate，所以手动触发\n      this.run();\n    }\n  }, {\n    key: 'back',\n    value: function back() {\n      window.history.back();\n    }\n  }, {\n    key: 'go',\n    value: function go(index) {\n      window.history.go(index);\n    }\n  }]);\n\n  return HistoryRouter;\n}(_baseRouter2.default);\n\nexports.default = HistoryRouter;\n\n//# sourceURL=webpack:///./router/historyRouter.js?");

/***/ }),

/***/ "./router/lifecycle.js":
/*!*****************************!*\
  !*** ./router/lifecycle.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ROUTER_STATE = {\n  pendding: 'pendding',\n  finish: 'finish'\n};\n\nvar _class = function () {\n  function _class() {\n    _classCallCheck(this, _class);\n\n    this.state = ROUTER_STATE.pendding;\n    this.beforeHook = [];\n    this.afterHook = [];\n    this.renderHook = [];\n  }\n\n  _createClass(_class, [{\n    key: 'use',\n    value: function use(fn) {\n      this.renderHook.push(fn);\n      return this;\n    }\n  }, {\n    key: 'beforeEach',\n    value: function beforeEach(fn) {\n      var _this = this;\n\n      this.beforeHook.push(fn);\n      return function () {\n        var i = _this.beforeHook.indexOf(fn);\n        if (i > -1) _this.beforeHook.splice(i, 1);\n      };\n    }\n  }, {\n    key: 'afterEach',\n    value: function afterEach(fn) {\n      var _this2 = this;\n\n      this.afterHook.push(fn);\n      return function () {\n        var i = _this2.afterHook.indexOf(fn);\n        if (i > -1) _this2.afterHook.splice(i, 1);\n      };\n    }\n  }, {\n    key: 'runHook',\n    value: function runHook(form, to, next) {\n      var _this3 = this;\n\n      this.beforeHook.forEach(function (fn) {\n        return fn.call(_this3, form, to, next);\n      });\n    }\n  }]);\n\n  return _class;\n}();\n\nexports.default = _class;\n\n//# sourceURL=webpack:///./router/lifecycle.js?");

/***/ }),

/***/ "./router/router.js":
/*!**************************!*\
  !*** ./router/router.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _hashRouter = __webpack_require__(/*! ./hashRouter.js */ \"./router/hashRouter.js\");\n\nvar _hashRouter2 = _interopRequireDefault(_hashRouter);\n\nvar _historyRouter = __webpack_require__(/*! ./historyRouter.js */ \"./router/historyRouter.js\");\n\nvar _historyRouter2 = _interopRequireDefault(_historyRouter);\n\nvar _lifecycle = __webpack_require__(/*! ./lifecycle.js */ \"./router/lifecycle.js\");\n\nvar _lifecycle2 = _interopRequireDefault(_lifecycle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 前端路由模拟实现\r\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */\n\n\nvar ROUTER_MODE = {\n  hash: 'hash',\n  history: 'history'\n};\n\nvar Router = function (_Lifecycle) {\n  _inherits(Router, _Lifecycle);\n\n  function Router(_ref) {\n    var _ref$mode = _ref.mode,\n        mode = _ref$mode === undefined ? 'hash' : _ref$mode,\n        routes = _ref.routes,\n        _ref$render = _ref.render,\n        render = _ref$render === undefined ? function () {} : _ref$render;\n\n    _classCallCheck(this, Router);\n\n    var _this = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this));\n\n    _this.renderHook.push(render);\n    _this.router = ROUTER_MODE.hash === mode ? new _hashRouter2.default(_this, routes) : new _historyRouter2.default(_this, routes);\n    return _this;\n  }\n\n  _createClass(Router, [{\n    key: 'push',\n    value: function push(path) {\n      var _this2 = this;\n\n      var nextRoute = this.router.getRouter(path);\n      if (this.beforeHook.length) {\n        this.runHook(this.router.currentRoute, nextRoute, function () {\n          _this2.router.push(path);\n        });\n      } else {\n        this.router.push(path);\n      }\n      //this.updateRouter(this.router.currentRouter,nextRouter, () => { \n      //  this.router.push(path)\n      //})\n    }\n  }, {\n    key: 'replace',\n    value: function replace(path) {\n      var _this3 = this;\n\n      var nextRoute = this.router.getRouter(path);\n      if (this.beforeHook.length) {\n        this.runHook(this.router.currentRoute, nextRoute, function () {\n          _this3.router.replace(path);\n        });\n      } else {\n        this.router.replace(path);\n      }\n    }\n  }, {\n    key: 'back',\n    value: function back() {\n      this.router.back();\n    }\n  }, {\n    key: 'go',\n    value: function go(index) {\n      this.router.go(index);\n    }\n  }]);\n\n  return Router;\n}(_lifecycle2.default);\n\nexports.default = Router;\n\n//# sourceURL=webpack:///./router/router.js?");

/***/ })

/******/ });