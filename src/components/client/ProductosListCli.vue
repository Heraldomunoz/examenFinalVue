<template>
    <div class="container">
        <h1>Lista de Productos</h1>

        <Card :catalogo="catalogo" />
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
            this.$store.catalogo=[]
            var database = firebase.firestore();
            console.log(database.collection("productos").get());
            database
                .collection("productos")
                .get()
                .then((query) => {
                    query.forEach((doc) => {
                        console.log(doc.data().nombre);
                        this.catalogo.push({
                            id: doc.id,
                            nombre: doc.data().nombre,
                            precio: doc.data().precio,
                            imagen: doc.data().imagen,
                            descripcion: doc.data().descripcion,
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
                    console.log(data);
                })
                .catch((error) => {
                    console.log(error);
                });
                this.leer()
        },
    },
    beforeMount() {
        this.leer();
        console.log(this.catalogo);
    },
};
</script>

<style></style>
