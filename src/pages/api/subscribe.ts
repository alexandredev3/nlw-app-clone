import { NextApiRequest, NextApiResponse } from 'next';

import subscription from './_lib/subscription';
import { signToken } from './_lib/jwt';

export default async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  if (request.method === 'POST') {
    const { name, email } = request.body;

    try {
      const user = await subscription(name, email);

      const token = signToken({
        userRef: user.ref.id,
      });

      return response.status(200).json({
        user: user.data,
        token,
      });
    } catch (error) {
      console.error(error);

      return response.status(500).end(error.message);
    }
  }

  response.setHeader('Allow', 'POST');
  return response.status(405).end('Method not allowed');
};
