import faunadb from 'faunadb';

// eslint-disable-next-line prefer-destructuring
const FAUNADB_SECRET = process.env.FAUNADB_SECRET;

const client = new faunadb.Client({ secret: FAUNADB_SECRET });

export default client;
