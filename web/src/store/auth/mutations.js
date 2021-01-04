import axios from '@/services/axios';

export default {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_TOKEN(state, token) {
    state.token = token;
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};
