import shortid from 'shortid';

export default {
    namespaced: true,
    state: {
        list: [],
        selectedId: null
    },
    mutations: {
        add(state, order) {
            order.id = shortid.generate();
            order.datetime = Date.now();
            state.list.push(order);
        },
        select(state, id) {
            state.selectedId = id;
        },
        unSelect(state) {
            state.selectedId = null;
        }
    },
    actions: {
        add({ commit }, order) {
            if (order && order.total > 0 && order.list && order.list.length > 0) {
                commit('add', order);
            }
        },
        select({ commit }, id) {
            commit('select', id);
        },
        unSelect({ commit }) {
            commit('unSelect');
        }
    },
    getters: {
        list: (state) => state.list,
        selectedId: (state) => state.selectedId,
        selected: (state) => state.list.find((order) => order.id == state.selectedId)
    }
};
