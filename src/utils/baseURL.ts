// vai ser assim ate eu descobrir um jeito melhor de conseguir a URL.
// fique a vontade para fazer um PR!
/* eslint-disable prefer-destructuring */
const NEXT_VERCEL_URL =
  'https://nextlevelweek-clone-alexandredev3.vercel.app/api';
const NEXT_LOCAL_URL = 'http://localhost:3000/api';

const NODE_ENV = process.env.NODE_ENV;

const URL = {
  development: NEXT_LOCAL_URL,
  production: NEXT_VERCEL_URL,
};

const BASE_URL = URL[NODE_ENV];

export default BASE_URL;
