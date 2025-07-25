import api from './api';

export const authService = {
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response;
  },

  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response;
  },

  getProfile: async () => {
    const response = await api.get('/auth/profile');
    return response;
  }
};
