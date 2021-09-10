import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'vue-axios'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDDqGPq6aLNfw83Q2VngjOu0UXniBSgkBY",
  authDomain: "mini-tienda-2dbf0.firebaseapp.com",
  projectId: "mini-tienda-2dbf0",
  storageBucket: "mini-tienda-2dbf0.appspot.com",
  messagingSenderId: "330513754576",
  appId: "1:330513754576:web:a5cf34f2183221e958f1d5",
  measurementId: "G-EFBBQNES79"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let app;

firebase.auth().onAuthStateChanged(user=>{
  console.log(user);
  if(!app) {
    app = new Vue({
      router,
      store,
      // axios,
      render: h => h(App)
    }).$mount('#app')
  }
});
