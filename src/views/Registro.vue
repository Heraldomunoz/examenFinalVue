<template>
  <div class="container my-5">
    <h2 class="font-weight-bold mb-5">Registrate</h2>
    <div class="row">
      <form class="mr-4">
        <div class="my-3 pr-3">
          <label for="nombre">Nombre</label>
          <input
            class="form-control text-center"
            v-model="usuario"
            type="text"
            placeholder="Ingresa tu nombre"
          />
        </div>
        
        <div class="my-3 pr-3">
          <label for="email">Email</label>
          <input 
          class="form-control text-center"
          v-model="email" 
          type="email" 
          placeholder="Ingresa tu email" 
          />
        </div>

        <div class="my-3 pr-3">
          <label for="password">Password</label>
        <input
          class="form-control text-center"
          v-model="password"
          type="password"
          placeholder="Ingresa un Password"
        />
        </div>

        <div class="my-3 pr-3">
          <label for="password2">Re ingresa Password</label>
        <input
          class="form-control text-center"
          v-model="password2"
          type="password"
          placeholder="Re Ingresa un Password"
        />
        </div>
        <button @click.prevent="enviar" class="btn btn-outline-success">enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
    data() {
        return {
            usuario: null,
            email: null,
            password:null,
            password2:null

        }
    },
    methods: {
        enviar(){
          if(this.password==this.password2)
            firebase
                .auth().createUserWithEmailAndPassword(this.email, this.password)
                .then((userCredential) => {
    //Cierre de sesión
                  firebase
                  .auth()
                  .signOut()
                  .then( ( ) => {
                    this.$router.replace( { name: "Home" });
                  });
    // Signed in
             var usuario = userCredential.user;
             console.log(usuario)
             var email = userCredential.email;
             console.log(email)
             this.usuario=null
             this.email=null
             this.password=null
            })
             .catch((error) => {
                 console.log(error)
            // var errorCode = error.code;
            //     var errorMessage = error.message;
              // ..
            });
        }
    }
};
</script>

<style></style>
