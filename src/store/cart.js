import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        list: {}
    },
    mutations: {
        push(state, item) {
            if (!state.list[item.id]) {
                Vue.set(item, 'count', 1);
                Vue.set(state.list, item.id, item);
            } else {
                state.list[item.id].count++;
            }
        },
        remove(state, id) {
            Vue.delete(state.list, id);
        },
        clear(state) {
            state.list = {};
        }
    },
    actions: {
        push({ rootGetters, commit }, id) {
            let item = rootGetters['product/item'](id);
            commit('push', item);
        },
        remove({ commit }, id) {
            commit('remove', id);
        },
        clear({ commit }) {
            commit('clear');
        },
        order({ getters, dispatch }) {
            const order = { list: getters.list, total: getters.total, count: getters.count };
            dispatch('order/add', order, { root: true });
            dispatch('clear');
        }
    },
    getters: {
        list: (state) => Object.values(state.list),
        count: (state) => {
            var sum = 0;
            Object.values(state.list).map((item) => (sum += item.count ? parseInt(item.count) : 0));
            return sum;
        },
        total: (state) => {
            var sum = 0.0;
            Object.values(state.list).map((item) => (sum += item.price * item.count));
            return sum.toFixed(2);
        }
    }
};
