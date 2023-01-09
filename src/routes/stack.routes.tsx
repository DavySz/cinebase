import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Actors } from "../screens/Actors/actors";
import { Home } from "../screens/Home/home";
import { MovieDetails } from "../screens/MovieDetails/movieDetails";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="MovieDetails" component={MovieDetails} />
      <Screen name="Actors" component={Actors} />
    </Navigator>
  );
}
