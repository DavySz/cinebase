import { createContext, useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

  async function getUserFromAsyncStorage() {
    const user = await AsyncStorage.getItem("@user");
    return user;
  }

  async function saveUserOnAsyncStorage(user: TUser) {
    await AsyncStorage.setItem("@user", JSON.stringify(user));
  }

  async function getGoogleUserInfo(token: string) {
    const { data } = await axios.get(
      `${GOOGLE_USER_INFO_URL}/userinfo?alt=json&access_token=${token}`
    );

    const user = {
      id: String(data.id),
      email: data.email,
      name: data.given_name,
      photo: data.picture,
    };

    saveUserOnAsyncStorage(user);
    setUser(user);
  }

  async function userLogged() {
    const userLogged = await getUserFromAsyncStorage();
    if (userLogged) {
      setUser(JSON.parse(userLogged));
    }
  }

  async function signInWithGoogle() {
    const { type, params } = (await AuthSession.startAsync({
      authUrl: GOOGLE_AUTH_URL,
    })) as TAuthorizationResponse;

    if (type === "success") {
      await getGoogleUserInfo(params.access_token);
    }
  }

  async function logout() {
    setUser({} as TUser);
    await AsyncStorage.removeItem("@user");
  }

  useEffect(() => {
    userLogged();
  }, []);

  const values = useMemo(
    () => ({
      signInWithGoogle,
      logout,
      user,
    }),
    [user]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
