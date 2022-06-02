import { createStore } from 'vuex'

export default createStore({
  state: {
    shoes:[],
  },
  mutations: {
    deleteShoes(state,index) {
      state.shoes.splice(index,1)
    },
    add(state,item) {
      state.shoes.push(item)
    },
    restart(state) {
      state.shoes = [];
    }
  },
  actions: {
  },
  modules: {
  }
})
