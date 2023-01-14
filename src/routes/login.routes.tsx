import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../screens/SignIn/signIn";

const { Navigator, Screen } = createNativeStackNavigator();

export function LoginRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}
