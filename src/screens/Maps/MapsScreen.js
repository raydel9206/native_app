import React, { useState, useEffect, useRef } from "react";
import { Box, NativeBaseProvider } from "native-base";
import MapView from "react-native-maps";
import styleScreens from "../../styles/styleScreens";

const MapsScreen = ({ navigation, route, rootStore }) => {
  const mapRef = useRef();
  return (
    <NativeBaseProvider>
      <MapView
       ref={mapRef}
       style={styleScreens.map}
        initialRegion={{
          latitude: 22.422994,
          longitude: -83.679783,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        zIndex={1}>
      </MapView>
    </NativeBaseProvider>
  )
}


export default MapsScreen;
