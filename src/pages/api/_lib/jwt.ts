import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

type IPayload = {
  userRef: string;
};

// eslint-disable-next-line prefer-destructuring
const PUBLIC_KEY = process.env.PUBLIC_KEY;
// eslint-disable-next-line prefer-destructuring
const PRIVATE_KEY = process.env.PRIVATE_KEY;

function extractToken(request: NextApiRequest): string {
  const authorizationHeader = request.headers.authorization || '';

  const token: string = authorizationHeader.replace('Bearer ', '');

  return token;
}

const verifyToken = (token: string): Promise<IPayload> =>
  new Promise((resolve, reject) => {
    const data = jwt.verify(token, PUBLIC_KEY, (error, decoded) => {
      if (error) {
        return reject(error);
      }

      return decoded;
    });

    return resolve((data as unknown) as IPayload);
  });

export function signToken(payload: IPayload): string {
  const token = jwt.sign({ userRef: payload.userRef }, PRIVATE_KEY, {
    algorithm: 'RS256',
    expiresIn: '1d',
  });

  return token;
}

export const ensureAuthenticate = (
  fn: (request: NextApiRequest, response: NextApiResponse) => void
) => async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  const token = extractToken(request);

  verifyToken(token)
    .then(data => {
      const { userRef } = data;

      request.userRef = userRef;

      return fn(request, response);
    })
    .catch(error =>
      response.status(400).json({
        message: 'Invalid authentication token',
        code: 'UNAUTHENTICATED',
      })
    );
};
