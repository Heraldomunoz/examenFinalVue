import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'
import Admin from '../views/Admin.vue'
import firebase from 'firebase/app'
import 'firebase/app'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      requiereLogin: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    // meta: {
    //   requiereLogin: true,
    //   requiereAdmin: true
    // }
  }
]

const router = new VueRouter({
  mode:'history',
  base:process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  const requiereLogin = to.matched.some(ruta=> ruta.meta.requiereLogin);
  const logueado = firebase.auth().currentUser;
  if(requiereLogin && !logueado) {
    next('/login');
  }
  else{
    next();
  }
});
export default router
