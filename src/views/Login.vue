<template>
  <div>
      <input v-model="usuario" type ="text" placeholder="Usuario">
      <input v-model="password" type ="password" placeholder="Password">
      <button @click="login">Login</button>
      <button @click="salir">Salir</button>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
    data(){
        return{
            usuario:null,
            password:null
        }
    },
    methods:{
        login() {
            firebase.auth().signInWithEmailAndPassword(this.usuario, this.password)
            .then(data=> {
                console.log(data);
                this.$router.replace({ name: 'About' });
            })
            .catch(error=>{
                console.log(error);
            })
        },
        salir(){
            firebase
            .auth()
            .signOut()
            .then(() => {
                this.$router.replace({ name: 'Home' });
            });
        }
    }
}
</script>

<style>

</style>