import axios from 'axios';
const api = axios.create({
  baseURL: 'https://covidmg.com',
  timeout: 15000,
});

export default api;
