import { query as q } from 'faunadb';

import client from '../../../services/fauna';

type IUserData = {
  name: string;
  username: string;
  avatarURL: string;
  userRef: string;
};

type IResponse = {
  data: IUserData;
};

export default async function saveAccount({
  name,
  username,
  avatarURL,
  userRef,
}: IUserData): Promise<IResponse | null> {
  const account = await client.query<IResponse>(
    q.If(
      q.Not(q.Exists(q.Match(q.Index('find_account_by_username'), username))),
      q.Create(q.Collection('accounts'), {
        data: {
          name,
          username,
          avatarURL,
          userRef: q.Ref(q.Collection('users'), userRef),
        },
      }),
      null
    )
  );

  return account;
}
