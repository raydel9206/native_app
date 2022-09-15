import { StatusBar } from "expo-status-bar";
import { Provider } from "mobx-react";
import React, { useState, useEffect, Fragment } from "react";
import AppLoading from "expo-app-loading";
import Routes from "./src/navigation/index";
import { rootStore } from "./src/stores/rootStore";
import { useFonts } from "@expo-google-fonts/montserrat";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from "parse/react-native.js";
import keys from './constants/keys';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(keys.applicationId, keys.javascriptKey);
Parse.serverURL = keys.serverURL;

export default function App() {
  let [viewFont] = useFonts({
    Montserrat_400Regular: require("./assets/fonts/Montserrat-Regular.ttf"),
    Montserrat_Bold: require("./assets/fonts/Montserrat-Bold.ttf"),
    Montserrat_Medium: require("./assets/fonts/Montserrat-Medium.ttf"),
  });

  if (!viewFont) {
    return <AppLoading />;
  }
  return (
    <Provider rootStore={rootStore}>
      <Routes />
    </Provider>
  );
}
