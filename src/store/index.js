import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carrito: [],
    nombre: ''

  },
  getters: {
  },
  mutations: {
    addCarrito(state, datos) {      

      
      let { id, data } = datos;      
      let compra = data.filter(item => item.id == id)

      if(state.carrito.find(item => item.id == compra[0].id)== undefined){
        state.carrito.push(compra[0])
        
      }else{
        let modCarrito =state.carrito.find(item => item.id == compra[0].id)
        modCarrito.cantidad ++
      }
      
    },
    deleteCarrito(state, idProducto){
    

      let dataEliminar = state.carrito.filter(item => idProducto != item.id)
  
      state.carrito = dataEliminar
    },
    
  },
  actions: {
  },
  modules: {
  }
})
