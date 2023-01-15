import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { useTheme } from "styled-components/native";
import { Home } from "../screens/Home/home";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { MovieList } from "../screens/MovieList/movieList";
import { Profile } from "../screens/Profile/profile";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  const { colors } = useTheme();

  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarActiveTintColor: colors.main,
    tabBarInactiveTintColor: colors.background_primary,
    tabBarShowLabel: false,
    tabBarStyle: {
      height: 78,
      paddingVertical: Platform.OS === "ios" ? 20 : 0,
      backgroundColor: colors.header,
    },
  };

  return (
    <Navigator screenOptions={screenOptions} initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="MovieList"
        component={MovieList}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo size={24} color={color} name={"heart"} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
