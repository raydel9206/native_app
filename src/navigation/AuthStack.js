import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SignupScreen } from "../screens/AuthScreens/SignupScreen";
import LoginScreen from "../screens/AuthScreens/LoginScreen";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Group>

      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
