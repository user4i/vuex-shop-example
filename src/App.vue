<template>
    <div id="app" data-app>
        <img alt="Vue logo" class="logo" src="./assets/logo.png">
        <h1>Vuex webshop</h1>
        <Menu/>
        <router-view/>
    </div>
</template>

<script>
import Menu from "./components/Menu";

export default {
    components: {
        Menu
    }
};
</script>
<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
}
.logo {
    height: 90px;
}
td,
th {
    padding: 1px 6px !important;
}
</style>
