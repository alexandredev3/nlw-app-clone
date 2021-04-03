import { NextApiRequest, NextApiResponse } from 'next';

import { ensureAuthenticate } from './_lib/jwt';

// Apenas para teste
async function users(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  if (request.method === 'GET') {
    try {
      const { userId } = request;

      return response.status(200).json({
        userId,
      });
    } catch (error) {
      console.error(error);

      return response.status(error.requestResult.statusCode).end(error.message);
    }
  }

  response.setHeader('Allow', 'GET');
  return response.status(405).end('Method not allowed');
}

export default ensureAuthenticate(users);
