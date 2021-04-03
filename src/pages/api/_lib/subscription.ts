import { query as q } from 'faunadb';
import client from '../../../services/fauna';

type IUser = {
  name: string;
  email: string;
};

async function handleUserHasAlreadyBeenRegistered(
  email: string
): Promise<boolean> {
  // q.Casefold: transforma em lowercase;
  const user: boolean = await client.query(
    q.Exists(q.Match(q.Index('find_user_by_email'), q.Casefold(email)))
  );

  return user;
}

export default async function subscription(
  name: string,
  email: string
): Promise<IUser> {
  const userHasAlreadyBeenRegistered = await handleUserHasAlreadyBeenRegistered(
    email
  );

  if (userHasAlreadyBeenRegistered) {
    return {
      name,
      email,
    };
  }

  // q.Casefold: converter em lowercase;
  const user: any = await client.query(
    q.Create(q.Collection('users'), {
      data: {
        name,
        email,
      },
    })
  );

  return {
    name: user.data.name,
    email: user.data.email,
  };
}
