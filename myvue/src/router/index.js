import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const Home =()=>import("../view/home.vue")
const Login =()=>import("../view/login.vue")
const Shen =()=>import("../view/shen.vue")
const Detail =()=>import("../view/detail.vue")
const Jia =()=>import("../view/home/jia.vue")
const Xiu =()=>import("../view/home/xiu.vue")
let router=new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      children:[
        {
          path:"/home/jia",
          component:Jia
        },
        {
          path:"/home/xiu",
          component:Xiu
        }
      ]
    },
    {
      path: '/detail/:id',
      name:"/detail",
      component: Detail
    },
    {
      path: '/shen',
      component: Shen
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path:"*",
      redirect:"/home"
    }
  ]
})
// 添加全局路由导航守卫

router.beforeEach((to,from,next)=>{
    var token =localStorage.getItem("token");
    if(token){
      if(to.path=="/login"){
        next(from.path)
      }
      else{
        next()
      }
    }
    else{
      if(to.path=="/login"){
        next()
      }else{
        next("/login")
      }
    }
})
export default router
