import faunadb from 'faunadb';

const { FAUNADB_SECRET } = process.env;

const client = new faunadb.Client({ secret: FAUNADB_SECRET });

export default client;
