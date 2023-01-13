import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/auth";

export function useAuth() {
  return useContext(AuthContext);
}
