<template>
    <div id="nav" class="subheading">
        <v-layout align-center justify-center row color="blue-grey darken-1">
            <router-link to="/" color="blue-grey darken-1">Products</router-link>
            <span class="mx-1">|</span>
            <router-link to="/orders" @click.native="unSelect">Orders</router-link>

            <v-btn flat :color="cartColor" to="/cart" class="ma-0 ml-2 cartBtn">
                <v-icon>mdi-cart</v-icon>
                <sup class="body-1 font-weight-light mt-1">({{cartCount}})</sup>
            </v-btn>
        </v-layout>
    </div>
</template>

<script>
export default {
    computed: {
        cartCount() {
            return this.$store.getters["cart/count"];
        },
        cartColor() {
            return this.cartCount ? "indigo" : "blue-grey darken-1";
        }
    },
    methods: {
        unSelect() {
            this.$store.dispatch("order/unSelect");
        }
    }
};
</script>

<style scoped>
.cartBtn {
    min-width: 0 !important;
    padding: 2px !important;
}
a {
    color: #3f51b5;
}
</style>
