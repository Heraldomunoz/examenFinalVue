<template>
   <div>
       <h1>Demo</h1>
       <ProductosCreate/>
       <ProductosList/>
       <!--
           Crear Productos
           Actualizar Productos
           Tablas Visualizar Productos
       -->
   </div>
</template>

<script>
import ProductosCreate from '../components/ProductosCreate.vue'
import ProductosList from '../components/ProductosList.vue'
export default {
    name: 'Admin',
    components: {
        ProductosCreate,
        ProductosList
    }
}
</script>

<style>

</style>