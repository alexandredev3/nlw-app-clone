import { Collection, query as q, Ref } from 'faunadb';

import client from '../../../services/fauna';

type IResponse = {
  data: {
    track: {
      tech: string;
    };
  };
};

export default async function trackManager(
  tech: string,
  userRef: string
): Promise<IResponse> {
  const track: any = await client.query(
    q.If(
      q.Not(
        q.Exists(
          q.Match(
            q.Index('one_track_per_user'),
            Ref(Collection('users'), userRef)
          )
        )
      ),
      q.Create(q.Collection('tracks'), {
        data: {
          tech,
          userRef: Ref(Collection('users'), userRef),
        },
      }),
      q.Update(
        q.Select(
          ['ref'],
          q.Get(
            q.Match(
              q.Index('one_track_per_user'),
              Ref(Collection('users'), userRef)
            )
          )
        ),
        {
          data: {
            tech,
          },
        }
      )
    )
  );

  return track;
}
