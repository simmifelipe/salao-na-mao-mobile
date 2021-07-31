import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.23.65.229:8888',
});

export default api;
