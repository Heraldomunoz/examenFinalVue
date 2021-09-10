<template>
  <div>
      <h1>Lista de Productos</h1>
      <button @click="leer" class="btn btn-outline-success">Obtener</button>
      <table>
          <thead>
          <tr>
              <td>Nombre producto</td>
              <td>Precio producto</td>
              <td><img src Imagen/></td>
          </tr>
        <tbody>
            <tr v-for="pro in catalogo" :key="pro.id">
                <td>{{ pro.nombre }}</td>
                <td>{{ pro.precio }}</td>
                <td> <img :src="pro.imagen"/></td>
                <td>
                     <button @click="eliminar( pro.id )" :id="pro.id" class="btn btn-outline-danger">Eliminar</button>
                </td>
            </tr>
        </tbody>
          </thead>
      </table>
      
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
   data(){
       return {
           catalogo:[]
       }
   } ,
   methods: {
       leer () {
           var database = firebase.firestore();
           console.log(database.collection('productos').get ( ) )
           database.collection('productos').get( )
           .then( ( query ) => {
               query.forEach(( doc ) => {
                   console.log(doc.data().nombre)
                   this.catalogo.push( {
                       id:doc.id,
                       nombre:doc.data().nombre,
                       precio:doc.data().precio,
                       imagen:doc.data().imagen,
                       descripcion:doc.data().descripcion,
                   });
               })
           })
       },
       eliminar(idFirebase){
           var database = firebase.firestore();
           database.collection('productos').doc(idFirebase).delete()
           .then((data) =>{
               console.log(data);
           })
           .catch((error)=> {
               console.log(error);
           })
       }
    }
}
</script>

<style>
</style>