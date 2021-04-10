import { Collection, query as q } from 'faunadb';

import client from '../../../services/fauna';

type IUserData = {
  name: string;
  username: string;
  avatarURL: string;
};

type IResponse = {
  data: IUserData;
};

export default async function saveAccount({
  name,
  username,
  avatarURL,
}: IUserData): Promise<IResponse | null> {
  const account: IResponse = await client.query(
    q.If(
      q.Not(q.Exists(q.Match(q.Index('find_account_by_username'), username))),
      q.Create(q.Collection('accounts'), {
        data: {
          name,
          username,
          avatarURL,
        },
      }),
      null
    )
  );

  return account;
}
