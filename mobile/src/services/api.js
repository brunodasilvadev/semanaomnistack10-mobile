import axios from 'axios';

const api = axios.create({
  baseURL: 'http://19.19.19.117:3333',
});

export default api;
