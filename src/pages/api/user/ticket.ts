import getAccount from '../_lib/getAccount';
import baseURL from '../../../utils/baseURL';

type IResponse = {
  account: IAccount;
  ticketURL: string;
};

export default async (
  username: string | string[]
): Promise<IResponse | null> => {
  try {
    const account = await getAccount(username);

    if (!account) {
      return null;
    }

    const ticketURL = `${baseURL}/api/nlw-ticket.png?username=${username}`;

    return {
      ...account,
      ticketURL,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
