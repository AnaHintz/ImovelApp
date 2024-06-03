import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from "@expo-google-fonts/montserrat";

import Routes from "./src/Router";

export default function App() {
 let [fontsLoaded] = useFonts({
 Montserrat_400Regular,
 Montserrat_500Medium,
 Montserrat_700Bold,
 });
 return (
  <>
  <StatusBar style="light" backgroundColor="#000" translucent={false} />
  <Routes />
  </>
  );
 }