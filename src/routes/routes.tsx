import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth/useAuth";
import { LoginRoutes } from "./login.routes";
import { StackRoutes } from "./stack.routes";
import { TabRoutes } from "./tab.routes";

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <StackRoutes /> : <LoginRoutes />}
    </NavigationContainer>
  );
}
