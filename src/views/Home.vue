<template>
  <div class="home">
     <ProductosList/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductosList from '../components/ProductosList.vue'

export default {
  name: 'Home',
  components: {
    ProductosList
  }
}
</script>
