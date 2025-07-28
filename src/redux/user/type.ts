type User = {
  id: string;
  name: string;
  email: string;
  roles: "admin" | "user" | "premium-user";
};

type UserState = {
  user: User;
  accessToken: string;
};

export type { User, UserState };
