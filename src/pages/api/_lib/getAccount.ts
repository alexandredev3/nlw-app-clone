import { query as q } from 'faunadb';

import client from '../../../services/fauna';

export type IAccount = {
  name: string;
  username: string;
  avatarURL: string;
  userRef: {
    id: string;
  };
};

type IAccountResponse = {
  data: IAccount;
};

type ITrackResponse = {
  data: {
    tech: string;
  };
};

export default async function getAccount(username: string | string[]) {
  const account = await client.query<IAccountResponse>(
    q.If(
      q.Exists(q.Match(q.Index('find_account_by_username'), username)),
      q.Get(q.Match(q.Index('find_account_by_username'), username)),
      null
    )
  );

  if (!account) {
    return null;
  }

  const track = await client.query<ITrackResponse>(
    q.Get(
      q.Match(
        q.Index('one_track_per_user'),
        q.Ref(q.Collection('users'), account.data.userRef.id)
      )
    )
  );

  const { name, avatarURL } = account.data;

  return {
    account: {
      name,
      username,
      avatarURL,
    },
    track: track.data.tech,
  };
}
