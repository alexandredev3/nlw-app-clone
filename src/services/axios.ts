import axios from 'axios';

// eslint-disable-next-line prefer-destructuring
const NEXT_VERCEL_URL = 'nextlevelweek-clone-alexandredev3.vercel.app';
// eslint-disable-next-line prefer-destructuring
const NODE_ENV = process.env.NODE_ENV;

const isDev = NODE_ENV === 'development';

const api = axios.create({
  baseURL: isDev
    ? `http://localhost:3000/api`
    : `https://${NEXT_VERCEL_URL}/api/`,
});

export default api;
