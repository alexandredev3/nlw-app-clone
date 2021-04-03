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

async function handleUserHasAlreadyBeenRegistered(
  email: string
): Promise<IResponse | null> {
  // q.Casefold: transforma em lowercase;
  const user: IResponse = await client.query(
    q.If(
      q.Exists(q.Match(q.Index('find_user_by_email'), q.Casefold(email))),
      q.Get(q.Match(q.Index('find_user_by_email'), q.Casefold(email))),
      null
    )
  );

  return user;
}

export default async function subscription(
  name: string,
  email: string
): Promise<IResponse> {
  const userHasAlreadyBeenRegistered = await handleUserHasAlreadyBeenRegistered(
    email
  );

  if (!userHasAlreadyBeenRegistered) {
    // q.Casefold: converter em lowercase;
    const user: IResponse = await client.query(
      q.Create(q.Collection('users'), {
        data: {
          name,
          email,
        },
      })
    );

    return user;
  }

  return userHasAlreadyBeenRegistered;
}
