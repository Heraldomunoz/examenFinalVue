<template>
   <div>
       <h1>Agregar productos</h1>
       <ProductosCreate/>
       <!--
           Crear Productos
           Actualizar Productos
           Tablas Visualizar Productos
       -->
   </div>
</template>

<script>
import ProductosCreate from '../components/ProductosCreate.vue'
export default {
    name: 'Admin',
    components: {
        ProductosCreate,
    }
}
</script>

<style>

</style>