<template>
    <v-container py-0>
        <v-layout row wrap>
            <v-flex xs12 md7 pa-2>
                <ProductList/>
            </v-flex>
            <v-flex xs12 md5 pa-2 v-if="$vuetify.breakpoint.mdAndUp">
                <Cart :tiny="true"/>
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
