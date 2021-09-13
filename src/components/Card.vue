<template>
    <div class="row d-flex justify-content-between">
        <!-- <h1>{{cont.nombreProducto+" "+ cont.modelo}}</h1> -->
        <div
            class="card p-0"
            style="width: 18rem"
            v-for="cont in catalogo"
            :key="cont.id"
        >
            <img :src="cont.imagen" class="card-img-top" :alt="cont.nombre" />
            <div class="card-body">
                <h5 class="card-title">{{ cont.nombre }}</h5>
                <p class="card-text">
                    {{ cont.descripcion }}
                </p>
                <div class="card-footer text-muted">
                    Cantidad disponible: {{ cont.cantidad }}
                </div>
                <button
                    type="button"
                    href="#"
                    :id="cont.id"
                    @click="addCarrito({ id: cont.id, data: catalogo })"
                    class="btn btn-primary col-12"
                >
                    Agregar
                </button>
                <button class="btn btn-danger" @click="eliminar(cont.id)">
                    eliminar
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
    name: "card",
    props: ["catalogo", "eliminar"],
    computed: {
        ...mapState(["carrito"]),
    },
    methods: {
        ...mapMutations(["addCarrito"]),
    },
};
</script>
