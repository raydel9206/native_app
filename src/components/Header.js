import React from "react";
import {
  Text,
  Icon,
  NativeBaseProvider,
  StatusBar,
  IconButton,
  Box,
  HStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Entypo from '@expo/vector-icons/Entypo'
import Fontisto from '@expo/vector-icons/Fontisto'
import { colors } from "../styles/styleGuides";
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = (props) => {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor={colors.DARKBLUE} barStyle="light-content" />
      <Box safeAreaTop backgroundColor={colors.DARKBLUE} />
      <HStack
        bg={colors.DARKBLUE}
        w="100%"
        h="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack alignSelf="center">
          <TouchableOpacity >
            <Entypo name="menu" size={30} color="white" />
          </TouchableOpacity>
        </HStack>

        <HStack alignItems="center">
          <Text color="white" fontSize="20" fontFamily={"Montserrat_Medium"}>
            {props.title}
          </Text>
        </HStack>
        <HStack space="2">
          <IconButton
            icon={
              <Icon
                as={<Ionicons name="log-out" />}
                // size="sm"
                color={colors.LIGTHBLUE}
              />
            }
          />
        </HStack>
      </HStack>
    </NativeBaseProvider>
  );
};
export default Header;