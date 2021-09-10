<template>
    <div class="container my-5">
         <div class="row">
             <form class="mr-4">
                <div class="my-3 pr-3">
                     <label for="nombre">Producto</label>
                        <input 
                        v-model="nombre"
                        class="form-control text-center" 
                        type="text" 
                        placeholder="Nombre Producto" 
                        />
                </div>

                 <div class="my-3 pr-3">
                     <label for="precio">Precio</label>
                         <input 
                         class="form-control text-center"
                         v-model="precio"
                         type="number" 
                         placeholder="Precio Producto" 
                         />
                </div>
                
                <div class="my-3 pr-3">
                     <label for="Url">Url</label>
                     <input 
                     class="form-control text-center"
                     v-model="imagen"
                     type="text" 
                     placeholder="Url imagen producto" 
                     />
               </div>

                <div class="my-3 pr-3">
                     <label for="descripcion">Descripcion</label>
                     <textarea 
                     class="form-control text-center"
                     placeholder="Descripcion producto" 
                     v-model="descripcion"></textarea>
       </div>
       <button type="text" @click.prevent="crear" class="btn btn-outline-success">Crear</button>
         <button @click="salir" class="btn btn-outline-primary">Salir</button>

      </form>
      </div>
      </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
    data() {
        return {
            nombre: null,
            precio: null,
            imagen: null,
            descripcion: null
        }
    },
    methods: {
        crear( ) {
            var database = firebase.firestore();
            console.log(database);
            console.log(database.collection( 'productos' ) );
          //  firebase.database().ref('productos/').set({
            database.collection( 'productos').add({
            nombre: this.nombre,
            precio: this.precio,
            imagen: this.imagen,
            descripcion: this.descripcion
            });
        },
         salir(){
            firebase
            .auth()
            .signOut()
            .then(() => {
                this.$router.replace({ name: 'Home' });
            });
        }
    }
}
</script>

<style>

</style>