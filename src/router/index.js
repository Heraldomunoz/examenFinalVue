import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'
import Agregar from '../views/Agregar.vue'
import Carrito from '../views/Carrito.vue'
import firebase from 'firebase/app'
import 'firebase/app'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiereLogin: true
    }
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
    path: '/agregar',
    name: 'agregar',
    component: Agregar,
    meta: {
      requiereLogin: true,
    }
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: Carrito,
    meta: {
      requiereLogin: true,
    }
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
