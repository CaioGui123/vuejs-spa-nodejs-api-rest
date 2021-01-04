import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

// Modules
import auth from './auth/store';
import students from './students/store';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    students,
  },
  plugins: [createPersistedState({
    paths: ['auth'],
  })],
});
