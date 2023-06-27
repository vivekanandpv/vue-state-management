import { createStore } from 'vuex';

export default createStore({
  state: {
    counter: 0,
  },
  getters: {
    counter(state) {
      return state.counter;
    },
  },
  mutations: {
    incrementMutation(state) {
      ++state.counter;
    },
    decrementMutation(state) {
      --state.counter;
    },
  },
  actions: {
    incrementAction(context) {
      setTimeout(() => {
        context.commit('incrementMutation');
      }, 500);
    },
    decrementAction(context) {
      setTimeout(() => {
        context.commit('decrementMutation');
      }, 500);
    },
  },
  modules: {},
});
