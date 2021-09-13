<template>
    <div>
        <div class="container col-4 mt-5">
            <div class=" row col-12 d-flex justify-content-center">
                <div class="row mb-3 p-0">
                    <label for="usuario" class="col-2">Usuario</label>
                    <input
                        name="usuario"
                        v-model="usuario"
                        type="text"
                        placeholder="Usuario"
                        class="form form-control col-12 m-0"
                    />
                </div>

                <div class="row mb-3 p-0">
                    <label for="usuario" class="col-2">Password</label>
                    <input
                        class="form form-control"
                        name="password"
                        v-model="password"
                        type="password"
                        placeholder="Password"
                    />
                </div>
            </div>
            <div class="d-flex justify-content-around">
                <button
                    @click="login"
                    class="btn btn-outline-success login col-5"
                >
                    Login
                </button>
                <router-link
                    to="/registro"
                    class="btn btn-outline-primary col-5"
                    >Registrate Aqui</router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
    data() {
        return {
            usuario: null,
            password: null,
        };
    },
    methods: {
        login() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.usuario, this.password)
                .then((data) => {
                    console.log(data);
                    this.$router.replace({ name: "Home" });
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        salir() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.replace({ name: "Home" });
                });
        },
    },
};
</script>

<style></style>
