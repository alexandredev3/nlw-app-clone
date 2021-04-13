import { query as q } from 'faunadb';
import client from '../../../services/fauna';

type IUser = {
  name: string;
  email: string;
};

type IResponse = {
  ref: {
    id: string;
  };
  ts: Date;
  data: IUser;
};

export default async function subscription(
  name: string,
  email: string
): Promise<IResponse> {
  const user = await client.query<IResponse>(
    q.If(
      q.Not(
        q.Exists(q.Match(q.Index('find_user_by_email'), q.Casefold(email)))
      ),
      q.Create(q.Collection('users'), {
        data: {
          name,
          email,
        },
      }),
      q.Get(q.Match(q.Index('find_user_by_email'), q.Casefold(email)))
    )
  );

  return user;
}
