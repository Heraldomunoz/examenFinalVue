<template>
  <div>
       <div class="container my-5">
            <div class="row">
                <div class="my-3 pr-3">
                <label for="usuario">Usuario</label>
                    <input 
                    name="usuario"
                    v-model="usuario" 
                    type ="text" 
                    placeholder="Usuario"
                    />
                </div>

                <div class="my-3 pr-3">
                   <label for="usuario">Password</label>
                <input 
                name="password"
                v-model="password" 
                type ="password" 
                placeholder="Password"
                />
             </div>
             </div>
        </div>
                <button @click="login" class="btn btn-outline-success login">Login</button>
                <router-link to="/registro"  class="btn btn-outline-primary">Registrate Aqui</router-link>
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
                this.$router.replace({ name: 'Home' });
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