import { createContext, useMemo, useState } from "react";
import {
  TUser,
  IAuthContext,
  IAuthContextProvider,
  TAuthorizationResponse,
} from "./auth.types";
import * as AuthSession from "expo-auth-session";
import { GOOGLE_AUTH_URL } from "./constants";
import axios from "axios";
import { GOOGLE_USER_INFO_URL } from "@env";

export const AuthContext = createContext({} as IAuthContext);

export function AuthContextProvider({ children }: IAuthContextProvider) {
  const [user, setUser] = useState<TUser>({} as TUser);

  async function getUserInfo(token: string) {
    const { data } = await axios.get(
      `${GOOGLE_USER_INFO_URL}userinfo?alt=json&access_token=${token}`
    );

    const user = {
      id: String(data.id),
      email: data.email,
      name: data.given_name,
      photo: data.picture,
    };

    setUser(user);

    return user;
  }

  async function signInWithGoogle() {
    const { type, params } = (await AuthSession.startAsync({
      authUrl: GOOGLE_AUTH_URL,
    })) as TAuthorizationResponse;

    if (type === "success") {
      await getUserInfo(params.access_token);
    }
  }

  const values = useMemo(
    () => ({
      signInWithGoogle,
      user,
    }),
    [user]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
