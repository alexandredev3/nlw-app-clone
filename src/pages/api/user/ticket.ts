import getAccount from '../_lib/getAccount';
import baseURL from '../../../utils/baseURL';

export default async (username: string | string[]) => {
  try {
    const account = await getAccount(username);

    if (!account) {
      return null;
    }

    const ticketURL = `${baseURL}/nlw-ticket.png?username=${username}`;

    return {
      ...account,
      ticketURL,
    };
  } catch (error) {
    console.error(error);
  }
};
