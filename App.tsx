import { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { isLandscape } from "./src/utils/orientation";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  const [orientation, setOrientation] = useState(false);
  const [loaded] = useFonts({
    BungeeShade: require("./assets/fonts/BungeeShade.ttf"),
    ArchivoMedium: require("./assets/fonts/ArchivoMedium.ttf"),
  });

  Dimensions.addEventListener("change", () => {
    setOrientation(isLandscape());
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={{ isLandscape: orientation }}>
      <StatusBar style="inverted" />
      <HomeScreen />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
