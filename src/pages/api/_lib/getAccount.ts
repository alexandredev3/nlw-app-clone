import { query as q } from 'faunadb';

import client from '../../../services/fauna';

type IAccountResponse = {
  data: IAccount;
};

type ITrackResponse = {
  data: {
    tech: string;
  };
};

type IResponse = {
  account: IAccount;
  track: string;
};

export default async function getAccount(
  username: string | string[]
): Promise<IResponse | null> {
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

  const { name, avatarURL, userRef } = account.data;

  return {
    account: {
      name,
      username,
      avatarURL,
      userRef: {
        id: userRef.id,
      },
    },
    track: track.data.tech,
  };
}
