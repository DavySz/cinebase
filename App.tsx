import { ThemeProvider } from "styled-components";
import theme from "./src/global/theme/theme";
import { Home } from "./src/screens/Home/home";

import * as SplashScreen from "expo-splash-screen";

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      <ExpoStatusBar style="light" translucent />
      <Home />
    </ThemeProvider>
  );
}
