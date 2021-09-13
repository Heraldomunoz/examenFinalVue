<template>
    <div class="container">
        <h1>Lista de Productos</h1>
        
            <Card :catalogo="catalogo" :eliminar="eliminar" />
        
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
import Card from "./Card.vue";
export default {
    components: {
        Card,
    },
    data() {
        return {
            catalogo: [],
        };
    },
    methods: {
        leer() {
            var database = firebase.firestore();
            database
                .collection("productos")
                .get()
                .then((query) => {
                    query.forEach((doc) => {
                        this.catalogo.push({
                            id: doc.id,
                            nombre: doc.data().nombre,
                            precio: doc.data().precio,
                            imagen: doc.data().imagen,
                            descripcion: doc.data().descripcion,
                            cantidad: doc.data().cantidad,
                        });
                    });
                });
                
        },
        eliminar(idFirebase) {
            var database = firebase.firestore();
            database
                .collection("productos")
                .doc(idFirebase)
                .delete()
                .then((data) => {
                    
                    data;
                })
                .catch((error) => {
                    console.log(error);
                });
            this.catalogo.splice(0)
            this.leer();
        },
    },
    beforeMount() {
        this.leer();
    },
};
</script>

<style></style>
