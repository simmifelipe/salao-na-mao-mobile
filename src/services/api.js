import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.22.103.192:7777',
});

export default api;
