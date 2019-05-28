<template>
    <v-layout row>
        <v-flex xs12 sm12>
            <v-card>
                <v-card-title class="px-2">
                    <v-flex xs12 class="py-0">
                        <div class="headline lime--text text--darken-3">Products</div>
                    </v-flex>
                    <v-flex xs12 class="py-0">
                        <v-data-table :items="list" :headers="headers">
                            <template v-slot:items="props">
                                <td class="text-xs-left">{{ props.item.title }}</td>
                                <td>{{ props.item.price }}</td>
                                <td>
                                    <v-btn
                                        @click.native="$emit('add-to-cart', props.item)"
                                        fab
                                        dark
                                        small
                                        color="indigo"
                                    >
                                        <v-icon>mdi-cart-arrow-down</v-icon>
                                    </v-btn>
                                </td>
                            </template>
                        </v-data-table>
                    </v-flex>
                </v-card-title>
            </v-card>
        </v-flex>
    </v-layout>
</template>


<script>
export default {
    name: "ProductList",
    data() {
        return {
            headers: [
                {
                    text: "Product title",
                    align: "left",
                    value: "title"
                },
                { text: "Price", value: "price" },
                { text: "Add to Cart", value: "id" }
            ]
        };
    },
    computed: {
        list() {
            return this.$store.getters["product/list"];
        }
    },
    created() {
        this.$store.dispatch("product/load");
    },
    mounted() {
        this.$on("add-to-cart", function(item) {
            this.$store.dispatch("cart/push", item.id);
        });
    }
};
</script>

<style scoped>
</style>
