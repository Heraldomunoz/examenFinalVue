<template>
    <div class="my-5">
        <h1 class="mb-5">carrito</h1>
        <div class="container">
            <div class="row d-flex justify-content-between">
                <div class="col-6">
                    <div
                        v-for="item in carrito"
                        :key="item.id"
                        class="card mb-3"
                    >
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img
                                    :src="item.imagen"
                                    class="img-fluid rounded-start"
                                    :alt="item.nombre"
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">
                                        {{
                                            item.nombre 
                                        }}
                                    </h5>
                                    <p class="card-text">
                                        {{item.descripcion}}
                                    </p>
                                    <p class="card-text">
                                        <small class="text-muted"
                                            >Cantidad:
                                            {{ item.cantProducto }}</small
                                        >
                                    </p>
                                    <div
                                        class="col-12 d-flex justify-content-end"
                                    >
                                        <button
                                            :id="item.id"
                                            class="btn btn-outline-primary"
                                            @click="eliminar"
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="card">
                        <div class="card-header">
                            RESUMEN:
                        </div>
                        <div class="card-body" >
                            <h5 class="card-title">Tus productos son:</h5>
                            <ul class="list-group list-group-flush mb-3" >
                                <li class="list-group-item" v-for="item in carrito" :key="item.id">{{item.nombre}}</li>
                                
                            </ul>
                            <p class="text-center">Cantidad de productos: {{carrito.length}} </p>
                            <div class="col-12 d-flex justify-content-end">
                            <a href="#" class="btn btn-primary" id="finalizar" @click="gracias">Finalizar compra</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import firebase from "firebase/app";
import "firebase/firestore";
export default {
    name: "carritoCompra",
    computed: {
        ...mapState(["carrito"]),
    },
    methods: {
        ...mapMutations(["deleteCarrito","vaciarCarrito"]),
        eliminar(e) {
            this.deleteCarrito(e.target.id);
        },
        gracias(){
            
            var database = firebase.firestore();
            console.log(database);
            console.log(database.collection("carrito"));
            console.log(this.carrito)
            //  firebase.database().ref('carrito/').set({
                database.collection("carrito").add({
                    carrito: this.carrito,
                
            });
            this.carrito.splice(0)
            this.$router.replace({ name: 'About' });
                alert('Gracias por tu Compra')
        }
    },
    beforeMount(){
        console.log(this.carrito)
    }
};

</script>
