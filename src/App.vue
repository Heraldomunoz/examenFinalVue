<template>
    <div id="app">
        
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">CompraTodo</a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                        <div v-if="state == true">
                             <div
                                    class="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <router-link
                                        class="nav-link active"
                                        aria-current="page"
                                        to="/"
                                        >Catalogo</router-link
                                    >
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" to="/agregar"
                                        >Agregar Producto</router-link
                                    >
                                </li>
                            </ul>
                            <div class="d-flex nav-item">
                                <router-link
                                    :to="{ name: 'carrito' }"
                                    type="button"
                                    class="btn btn-primary position-relative "
                                >
                                    <i class="bi bi-basket"></i>
                                    <span
                                        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                    >
                                        {{ carrito.length }}
                                        <span class="visually-hidden"
                                            >unread messages</span
                                        >
                                    </span>
                                </router-link>

                                <button
                                    @click="logout"
                                    type="button"
                                    class="btn btn-success"
                                >
                                    Cerrar Sesion
                                </button>
                            </div>
                            <!-- <router-link class="nav-link" to="/registro"
                                >Registro</router-link
                            > -->
                             </div>
                        </div>


                        <div v-else>
                             <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <router-link
                                        class="nav-link active"
                                        aria-current="page"
                                        to="/HomeCli"
                                        >Catalogo</router-link
                                    >
                                </li>
                            </ul>
                            <div class="d-flex nav-item">
                                <router-link
                                    :to="{ name: 'carrito' }"
                                    type="button"
                                    class="btn btn-primary position-relative "
                                >
                                    <i class="bi bi-basket"></i>
                                    <span
                                        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                    >
                                        {{ carrito.length }}
                                        <span class="visually-hidden"
                                            >unread messages</span
                                        >
                                    </span>
                                </router-link>

                                <router-link
                                    to="/login"
                                    class="btn btn-success"
                                >
                                    Login
                                </router-link>
                            </div>
                        </div>
                        </div>
                    </div>
                
            </nav>
        <router-view />
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import { mapState } from "vuex";
export default {
    name: "app",
    data() {
        return {
            state: null,
        };
    },
    methods: {
        datos() {
            
                firebase.auth().onAuthStateChanged((user) => {
                    if (user.email == null) {
                        return console.log(this.state);
                    }
                    this.state = true;
                })
            
        },
        logout() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    // Sign-out successful.
                    this.state = null;
                    this.$router.replace({ name: "Login" });
                })
                .catch((error) => {
                    console.log(error);
                    // An error happened.
                });
        },
    },
    computed: {
        ...mapState(["carrito"]),
    },
    beforeMount() {
        this.datos();
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
