import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Actors } from "../screens/Actors/actors";
import { Home } from "../screens/Home/home";
import { MovieDetails } from "../screens/MovieDetails/movieDetails";
import { MovieReviews } from "../screens/MovieReviews/movieReviews";
import { ReviewDetails } from "../screens/ReviewDetails/reviewDetails";
import { TabRoutes } from "./tab.routes";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Tab">
      <Screen name="Tab" component={TabRoutes} />
      <Screen name="Home" component={Home} />
      <Screen name="MovieDetails" component={MovieDetails} />
      <Screen name="Actors" component={Actors} />
      <Screen name="MovieReviews" component={MovieReviews} />
      <Screen name="ReviewDetails" component={ReviewDetails} />
    </Navigator>
  );
}
