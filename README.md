# 简单的前端路由实现
a simple frontend router, you can use some spa
使用方式：
```
const routes = [{
  path:'/',
  name:'site',
  component: '首页',
},{
  path:'/test',
  name:'test',
  component: '测试也',
  children:[{
    path:'look',
    name:'testLook',
    component: '测试孩子路由',
  },{
    path:'look2',
    name:'testLook2',
    component: '测试孩子路由2121212121',
  }]
},{
  path:'/about',
  name:'about',
  component: () => '关于路由介绍'
},{
  path:'*',
  name:'404',
  component: '404'
}]
// 创建路由
let router = new Router({
  // mode:'history',
  routes,
  render:function (route,component) {
    if(typeof component === 'string') {
      view.innerHTML = component;
    } else if(typeof component === 'function') {
      view.innerHTML = component(route)
    } else {
      // 处理真正组件
      view.innerHTML = component
    }
  }
})

// 添加路由中间件，例如在某些路由执行一些操作
router.use(function(route,component) {
  // console.log('test router');
   console.log('test router2');
})
// 控制是否进入下一个路由 hook
router.beforeEach(function(form,to,next) {
  console.log(form,to)
  setTimeout(() => {
    // next必须调用
    next()
  },5000);
})

```
## 对应的一些API类似Vue的操作api
router.push
route.replace
route.back
route.go

