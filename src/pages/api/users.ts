import getAccounts, { IAccounts } from './_lib/getAccounts';

export default async (): Promise<IAccounts | null> => {
  try {
    const accounts = await getAccounts();

    return accounts;
  } catch (error) {
    console.error(error);
    return null;
  }
};
