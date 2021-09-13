<template>
  <div class="about">
    <h1>Muchas gracias por tu compra</h1>
    <h2>tu compra fue exitosa</h2>
    <p>ahora puedes seguir comprando</p>
    <button @click="volver" class="btn btn-success">Volver a Comprar</button>
  </div>
</template>

<script>
export default {
  name:"about",
  methods:{
    volver(){
      this.$router.replace({ name: "Home" });
    }
  }
}
</script>
