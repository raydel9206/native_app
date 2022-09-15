import React from "react";
import MainScreen from "../screens/Main/MainScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider } from "native-base";
import AntIcons from '@expo/vector-icons/AntDesign'
import { colors } from "../styles/styleGuides";
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { BlurView } from "expo-blur";
import MapsScreen from "../screens/Maps/MapsScreen";
import ProfileScreen from "../screens/Profile/Profile";

import { MainStackNavigator, MapsStackNavigator, MoreStackNavigator } from "./StackNavigator";

function CustomTabBar(props) {
  return <BlurView
    intensity={120}
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 70,
      elevation: 1,
      borderRadius: 20,
    }}
    tint="dark">
    <BottomTabBar {...props} />
  </BlurView>;
};

const screenOptions = (route, color) => {
  let iconName;
  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Maps':
      iconName = 'appstore-o';
      break;
    case 'Profile':
      iconName = 'user';
      break;
    default:
      break;
  }
  return (
    <NativeBaseProvider>
      <AntIcons name={iconName} color={color} size={30} />
    </NativeBaseProvider>
  );
};

const Tab = createBottomTabNavigator();
const TabNavigator = ({ navigation, route, rootStore }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.GRISCLARO,
        tabBarInactiveTintColor: colors.GRIS,
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: "Montserrat_Medium",
          marginBottom: 5
        },
        tabBarStyle: {
          height: 70,
          paddingVertical: 15,
          backgroundColor: 'transparent',
          elevation: 0,
          borderRadius: 20,
        },
        tabBarIcon: ({ color }) => screenOptions(route, color),
      })}>
      <Tab.Screen name="Arandela" component={MainStackNavigator} />
      <Tab.Screen name="Maps" component={MapsStackNavigator} />
      <Tab.Screen name="Profile" component={MoreStackNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;