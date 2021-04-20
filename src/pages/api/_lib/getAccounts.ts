import { Expr, query as q } from 'faunadb';

import client from '../../../services/fauna';

export type IAccounts = {
  data: Array<{
    ref: Expr;
    ts: Date;
    data: IAccount;
  }>;
};

export default async function getAllAccounts(): Promise<IAccounts> {
  const accounts = await client.query<IAccounts>(
    q.Map(
      q.Paginate(q.Documents(q.Collection('accounts'))),
      q.Lambda(account => q.Get(account))
    )
  );

  return accounts;
}
