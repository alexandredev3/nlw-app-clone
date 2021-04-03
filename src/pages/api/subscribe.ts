import { NextApiRequest, NextApiResponse } from 'next';

import subscription from './_lib/subscription';

export default async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  if (request.method === 'POST') {
    const { name, email } = request.body;

    try {
      await subscription(name, email);

      return response.status(204).end();
    } catch (error) {
      console.error(error);

      return response.status(error.requestResult.statusCode).end(error.message);
    }
  }

  response.setHeader('Allow', 'POST');
  return response.status(405).end('Method not allowed');
};
