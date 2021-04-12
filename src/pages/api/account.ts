import { NextApiRequest, NextApiResponse } from 'next';

import saveAccount from './_lib/saveAccount';
import { ensureAuthenticate } from './_lib/jwt';

async function account(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  if (request.method === 'POST') {
    try {
      const { name, username, avatarURL } = request.body;
      const { userRef } = request;

      await saveAccount({
        name,
        avatarURL,
        username,
        userRef,
      });

      return response.status(204).end();
    } catch (error) {
      console.error(error);

      return response.status(error.requestResult.statusCode).end(error.message);
    }
  }

  response.setHeader('Allow', 'POST');
  return response.status(405).end('Method not allowed');
}

export default ensureAuthenticate(account);
