<template>
    <v-layout row>
        <v-flex xs12 sm12>
            <v-card color="lime lighten-3">
                <v-card-title class="px-1 py-1">
                    <v-flex xs12 class="pb-0">
                        <div class="headline">
                            Order Details
                            <span class="body-2">{{datetimeString}}</span>
                        </div>
                    </v-flex>
                </v-card-title>
                <v-card-text class="pa-1 pt-0">
                    <v-layout row wrap v-if="!order" class="justify-center pa-2 pt-0 ma-0 empty">
                        <v-icon>mdi-timer-sand-empty</v-icon>
                        <i class="mt-1">No Order selected</i>
                    </v-layout>
                    <v-data-table v-if="order" :items="list" :headers="headers">
                        <template v-slot:items="props">
                            <td class="text-xs-left">{{ props.item.title }}</td>
                            <td>{{ props.item.price }}</td>
                            <td>{{ props.item.count }}</td>
                        </template>
                        <template v-slot:footer>
                            <tr>
                                <td class="text-xs-right">Total:</td>
                                <td>
                                    <b>${{ total }}</b>
                                </td>
                                <td>{{ count }}</td>
                            </tr>
                        </template>
                    </v-data-table>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    name: "Order",
    data() {
        return {
            headers: [
                { text: "Product title", align: "left", value: "title" },
                { text: "Price", align: "center", value: "price" },
                { text: "Count", value: "count" }
            ]
        };
    },
    computed: {
        order() {
            return this.$store.getters["order/selected"];
        },
        list() {
            return this.order ? this.order.list : [];
        },
        total() {
            return this.order ? this.order.total : 0;
        },
        count() {
            return this.order ? this.order.count : 0;
        },
        datetimeString() {
            return this.order
                ? new Date(this.order.datetime).toLocaleString()
                : "";
        }
    }
};
</script>

<style scoped>
.empty {
    background-color: white;
}
</style>
