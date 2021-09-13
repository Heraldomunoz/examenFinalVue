<template>
    <div class="container my-5">
        <div class="row d-flex justify-content-center">
            <form class="mr-4 col-6 ">
                <div class="my-3 pr-3 ">
                    <label for="nombre">Producto</label>
                    <input
                        v-model="nombre"
                        class="form-control"
                        type="text"
                        placeholder="Nombre Producto"
                    />
                </div>

                <div class="my-3 pr-3">
                    <label for="precio">Precio</label>
                    <input
                        class="form-control"
                        v-model="precio"
                        type="number"
                        placeholder="Precio Producto"
                    />
                </div>

                <div class="my-3 pr-3">
                    <label for="Url">Url</label>
                    <input
                        class="form-control"
                        v-model="imagen"
                        type="text"
                        placeholder="Url imagen producto"
                    />
                </div>
                <div class="my-3 pr-3">
                    <label for="Url">cantidad disponible</label>
                    <input
                        class="form-control"
                        v-model="cantidad"
                        type="number"
                        placeholder="Url cantidad producto"
                    />
                </div>

                <div class="my-3 pr-3">
                    <label for="descripcion">Descripcion</label>
                    <textarea
                        class="form-control"
                        placeholder="Descripcion producto"
                        v-model="descripcion"
                    ></textarea>
                </div>
                <div class="d-flex justify-content-between">
                    
                    <button @click="salir" class="btn btn-outline-primary col-5">
                        volver al Catalogo
                    </button>
                    <button
                        type="text"
                        @click.prevent="crear"
                        class="btn btn-success col-5"
                    >
                        Crear
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";

export default {
    data() {
        return {
            nombre: null,
            precio: null,
            imagen: null,
            descripcion: null,
            cantidad: null,
        };
    },
    methods: {
        crear() {
            var database = firebase.firestore();
            database.collection("productos").add({
                nombre: this.nombre,
                precio: this.precio,
                imagen: this.imagen,
                descripcion: this.descripcion,
                cantidad: this.cantidad,
            });

            this.nombre = "";
            this.precio = "";
            this.imagen = "";
            this.descripcion = "";
            this.cantidad = "";
            // this.$router.replace({ name: 'Home' });
        },
        salir() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.replace({ name: "Home" });
                });
        },
    },
};
</script>

<style>
label {
    display: block;
    text-align: left;
    padding-left: 0.1rem;
}
</style>
