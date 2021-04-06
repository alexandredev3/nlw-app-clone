import { NextApiRequest, NextApiResponse } from 'next';

import { ensureAuthenticate } from './_lib/jwt';
import trackManager from './_lib/trackManager';

// Apenas para teste
async function track(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  if (request.method === 'POST') {
    try {
      const { userRef } = request;
      const { tech } = request.body;

      const trackSelected = await trackManager(tech, userRef);

      return response.status(200).json({
        track: trackSelected.data,
      });
    } catch (error) {
      console.error(error);

      return response.status(error.requestResult.statusCode).end(error.message);
    }
  }

  response.setHeader('Allow', 'POST');
  return response.status(405).end('Method not allowed');
}

export default ensureAuthenticate(track);
