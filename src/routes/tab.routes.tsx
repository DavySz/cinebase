import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { useTheme } from "styled-components/native";
import { Home } from "../screens/Home/home";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  const { colors } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.main,
        tabBarInactiveTintColor: colors.background_primary,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          backgroundColor: colors.header,
        },
      }}
      initialRouteName="Home"
    >
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
        name="MyList"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="list" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
