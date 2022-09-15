import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import MainStack from "./StackNavigator";

import { AuthenticatedUserContext } from "./AuthenticatedUserProvider";
import DrawerNavigation from "./DrawerNavigator";
export default function RootNavigator() {
  const { user } = useContext(AuthenticatedUserContext);
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}