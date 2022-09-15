import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/Main/MainScreen";
import MapsScreen from "../screens/Maps/MapsScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Home" component={MainScreen} />
    </Stack.Navigator>
  );
}

const MapsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Mapa" component={MapsScreen} />
    </Stack.Navigator>
  );
}

const MoreStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}>
      <Stack.Screen name="Mapa" component={MapsScreen} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, MapsStackNavigator, MoreStackNavigator };