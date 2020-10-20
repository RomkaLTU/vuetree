import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    treeItems: [
      {
        id: 1,
        name: 'Root 1:',
        children: [
          {
            id: 3,
            name: 'Item 1',
            children: [
              {
                id: 4,
                name: 'Item 1.1',
                children: [],
              },
              {
                id: 5,
                name: 'Item 1.2',
                children: [],
              }
            ],
          },
          {
            id: 6,
            name: 'Item 2',
            children: [],
          },
          {
            id: 7,
            name: 'Item 3',
            children: [],
          },
        ],
      },
      {
        id: 2,
        name: 'Root 2:',
        children: [
          {
            id: 8,
            name: 'Item 1',
            children: [
              {
                id: 9,
                name: 'Item 1.1',
                children: [],
              },
              {
                id: 10,
                name: 'Item 1.2',
                children: [],
              }
            ],
          },
        ],
      },
    ],
    selectedParentItem: false,
    lastId: 10,
  },
  getters: {
    treeItems: state => {
      return state.treeItems;
    },
    selectedParentItem: state => {
      return state.selectedParentItem;
    },
    lastId: state => {
      return state.lastId;
    },
  },
  mutations: {
    SET_PARENT_ITEM(state, payload) {
      state.selectedParentItem = payload;
    },
    SET_LAST_ID(state, payload) {
      state.lastId = payload;
    },
  },
  actions: {
    setParentItem({commit}, payload) {
      commit('SET_PARENT_ITEM', payload);
    },
    setLastId({commit}, payload) {
      commit('SET_LAST_ID', payload);
    },
  }
})
