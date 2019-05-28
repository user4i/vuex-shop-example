<template>
    <v-layout row>
        <v-flex xs12 sm12>
            <v-card>
                <v-card-title class="px-2">
                    <v-flex xs12 class="py-0">
                        <div class="headline lime--text text--darken-3">Orders</div>
                    </v-flex>
                    <v-flex xs12 class="py-0">
                        <v-data-table
                            :items="list"
                            :headers="headers"
                            :pagination.sync="pagination"
                        >
                            <template v-slot:items="props">
                                <td>
                                    <v-btn
                                        @click="details(props.item.id)"
                                        fab
                                        dark
                                        small
                                        color="indigo"
                                    >
                                        <v-icon
                                            dark
                                            v-if="props.item.id === selectedId"
                                        >mdi-folder-open-outline</v-icon>
                                        <v-icon dark v-else>mdi-folder</v-icon>
                                    </v-btn>
                                </td>
                                <td>{{ props.item.datetimeString }}</td>
                                <td>{{ props.item.total }}</td>
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
    name: "OrderList",
    data() {
        return {
            headers: [
                { text: "Details", align: "center", value: "id" },
                {
                    text: "Order Date and Time",
                    align: "center",
                    value: "datetime"
                },
                { text: "Total", align: "center", value: "total" }
            ],
            pagination: {
                sortBy: "datetime",
                descending: true,
                rowsPerPage: -1
            }
        };
    },
    computed: {
        list() {
            const list = this.$store.getters["order/list"];
            return list.map(order => ({
                ...order,
                datetimeString: new Date(order.datetime).toLocaleString()
            }));
        },
        selectedId() {
            return this.$store.getters["order/selectedId"];
        }
    },
    methods: {
        details(id) {
            this.$store.dispatch("order/select", id);
        }
    }
};
</script>

<style scoped>
</style>
