import axios from '@/services/axios';

export default {
  async login({ commit }, payload) {
    try {
      const { data } = await axios.post('/login', payload);

      const { user, token } = data;

      commit('SET_USER', user);
      commit('SET_TOKEN', token);

      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
