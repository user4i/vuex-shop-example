<template>
    <v-container py-0>
        <v-layout class="justify-center" row wrap>
            <v-flex xs12 md10 pa-2>
                <Cart/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

export default {
    components: {
        ProductList,
        Cart
    }
};
</script>

<style scoped>
</style>
