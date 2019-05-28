<template>
    <v-container py-0>
        <v-layout row wrap>
            <v-flex
                offset-xs0
                xs12
                offset-sm2
                sm8
                offset-md0
                md5
                pa-2
                v-if="$vuetify.breakpoint.mdAndUp || !this.selectedId"
            >
                <OrderList/>
            </v-flex>
            <v-flex xs12 md7 v-if="$vuetify.breakpoint.mdAndUp || this.selectedId">
                <v-layout justify-left row mb-2>
                    <a
                        v-if="!$vuetify.breakpoint.mdAndUp && this.selectedId"
                        @click="unSelect"
                    >&lt;&lt; Order List</a>
                </v-layout>
                <Order/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import OrderList from "../components/OrderList";
import Order from "../components/Order";

export default {
    components: {
        OrderList,
        Order
    },
    computed: {
        selectedId() {
            return this.$store.getters["order/selected"];
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
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
}
.logo {
    height: 70px;
}
td,
th {
    padding: 0 8px !important;
}
</style>
