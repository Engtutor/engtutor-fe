type User = {
  id: string;
  name: string;
  email: string;
};

type UserState = {
  user: User;
  accessToken: string;
};

export type { User, UserState };
