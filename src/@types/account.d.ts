type IAccount = {
  name: string;
  username: string | string[];
  avatarURL: string;
  userRef?: {
    id: string;
  };
};
