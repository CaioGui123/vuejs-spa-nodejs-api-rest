import axios from '../../services/axios';

export default {
  index: async ({ commit }) => {
    try {
      const { data } = await axios.get('/students');

      commit('SET_STUDENTS', data);

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  },
  show: async (context, id) => {
    try {
      const { data } = await axios.get(`/students/${id}`);

      return Promise.resolve(data);
    } catch (e) {
      return Promise.reject(e);
    }
  },
  store: async ({ commit }, payload) => {
    try {
      const student = await axios.post('/students', payload);

      commit('ADD_STUDENT', student);

      return Promise.resolve(student);
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  },
  update: async (context, { data, id }) => {
    try {
      const student = await axios.put(`/students/${id}`, data);

      return Promise.resolve(student);
    } catch (e) {
      return Promise.reject(e);
    }
  },
  destroy: async ({ commit }, id) => {
    try {
      await axios.delete(`/students/${id}`);

      commit('REMOVE_STUDENT', id);

      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
};
