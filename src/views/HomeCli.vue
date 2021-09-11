<template>
  <div class="homecli">
     <ProductosList/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductosList from '../components/client/ProductosListCli.vue'

export default {
  name: 'HomeCli',
  components: {
    ProductosList
  }
}
</script>
