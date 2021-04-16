import getAccount from '../_lib/getAccount';

// eslint-disable-next-line prefer-destructuring
const NEXT_VERCEL_URL = 'nextlevelweek-clone-alexandredev3.vercel.app';
// eslint-disable-next-line prefer-destructuring
const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';

const BASE_URL = isDev
  ? 'http://localhost:3000/api'
  : `https://${NEXT_VERCEL_URL}/api`;

export default async (username: string | string[]) => {
  try {
    const account = await getAccount(username);

    if (!account) {
      return null;
    }

    const ticketURL = `${BASE_URL}/nlw-ticket.png?username=${username}`;

    return {
      ...account,
      ticketURL,
    };
  } catch (error) {
    console.error(error);
  }
};
