<template>
    <v-layout row class="justify-center">
        <v-flex :class="{'small': !list.length}">
            <v-card color="lime lighten-3">
                <v-card-title class="px-1 py-1">
                    <v-flex xs12 class="pb-0">
                        <div class="headline">Cart</div>
                    </v-flex>
                    <v-flex xs12 class="py-0 px-0 pt-2 my-0">
                        <v-layout
                            row
                            wrap
                            v-if="!list.length"
                            class="justify-center pa-2 pt-0 ma-0 emptyMsg"
                        >
                            <v-icon>mdi-timer-sand-empty</v-icon>
                            <i class="mt-1">Cart is empty...</i>
                        </v-layout>
                        <v-data-table
                            :items="list"
                            :headers="headers"
                            v-if="list.length"
                            class="elevation-1"
                        >
                            <template v-slot:items="props">
                                <td
                                    :class="{'c-tittle text-truncate': tiny}"
                                    class="text-xs-left"
                                >{{ props.item.title }}</td>
                                <td>{{ props.item.price }}</td>
                                <td>
                                    <v-text-field
                                        min="1"
                                        type="number"
                                        class="number-field"
                                        v-model="props.item.count"
                                    ></v-text-field>
                                </td>
                                <td>
                                    <v-btn
                                        @click.native="$emit('remove', props.item)"
                                        color="red darken-2"
                                        fab
                                        dark
                                        small
                                    >
                                        <v-icon dark>mdi-cart-arrow-up</v-icon>
                                    </v-btn>
                                </td>
                            </template>
                            <template v-slot:footer>
                                <tr>
                                    <td class="text-xs-right">Total:</td>
                                    <td>
                                        <b>${{ total }}</b>
                                    </td>
                                    <td>{{ count }}</td>
                                    <td></td>
                                </tr>
                            </template>
                            <template slot="no-data">
                                <div class="font-italic">Cart is empty...</div>
                            </template>
                        </v-data-table>
                    </v-flex>
                </v-card-title>
                <v-card-actions class="py-0">
                    <v-flex xs-6 class="py-0 text-xs-right">
                        <v-btn offset-xs6 @click="order" flat color="blue" large>Order</v-btn>
                    </v-flex>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    name: "Cart",
    props: {
        tiny: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            headers: [
                { text: "Product title", align: "left", value: "title" },
                { text: "Price", align: "center", value: "price" },
                { text: "Count", value: "count" },
                { text: "Remove", align: "center", value: "id" }
            ]
        };
    },
    computed: {
        list() {
            return this.$store.getters["cart/list"];
        },
        total() {
            return this.$store.getters["cart/total"];
        },
        count() {
            return this.$store.getters["cart/count"];
        }
    },
    methods: {
        order() {
            this.$store.dispatch("cart/order");
        }
    },
    mounted() {
        this.$on("remove", function(item) {
            this.$store.dispatch("cart/remove", item.id);
        });
    }
};
</script>

<style scoped>
.c-tittle {
    max-width: 8em;
}
.number-field {
    max-width: 3em;
}
.small {
    max-width: 30em;
}
.emptyMsg {
    background-color: white;
}
</style>
