import defaultData from './defaultData';

export default {
    namespaced: true,
    state: {
        list: [],
        selectedId: null
    },
    mutations: {
        setList(state, list) {
            state.list = [ ...list ];
        }
    },
    actions: {
        load({ commit }) {
            commit('setList', defaultData.products());
        }
    },
    getters: {
        list: (state) => {
            return state.list;
        },
        item: (state) => (id) => {
            return state.list.find((item) => item.id === id);
        }
    }
};
