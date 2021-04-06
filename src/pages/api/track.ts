import { NextApiRequest, NextApiResponse } from 'next';

import { ensureAuthenticate } from './_lib/jwt';
import trackManager from './_lib/trackManager';

const tracksAvailable = ['react', 'node', 'elixir', 'reactnative', 'flutter'];

async function track(
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> {
  if (request.method === 'POST') {
    try {
      const { userRef } = request;
      const { tech } = request.body;

      if (!tracksAvailable.includes(tech)) {
        return response.status(400).end('this track is not available');
      }

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
