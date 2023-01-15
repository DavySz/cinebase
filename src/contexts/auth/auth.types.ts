import { ReactNode } from "react";

export interface IAuthContextProvider {
  children: ReactNode;
}

export type TUser = {
  id: string;
  name: string;
  email: string;
  photo?: string;
};

export interface IAuthContext {
  user: TUser;
  logout: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
}

export type TAuthorizationResponse = {
  params: {
    access_token: string;
  };
  type: string;
};
