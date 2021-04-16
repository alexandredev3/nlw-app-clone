import axios from 'axios';

import baseURL from '../utils/baseURL';

const api = axios.create({
  baseURL: `${baseURL}/api/`,
});

export default api;
