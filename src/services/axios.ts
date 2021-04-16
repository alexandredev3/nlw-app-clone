import axios from 'axios';

import baseURL from '../utils/baseURL';

const api = axios.create({
  baseURL,
});

export default api;
