import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
  Flex,
  Icon,
  Pressable,
  Container,
  Image,
  AspectRatio,
  Toast,
} from "native-base";
import { MaterialIcons, Entypo, AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import React, { useContext, useState } from "react";
import loginStyle from "../../styles/loginStyle";
import { AuthenticatedUserContext } from "../../navigation/AuthenticatedUserProvider";
import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { colors } from "../../styles/styleGuides";

import Parse from "parse/react-native";

export const LoginScreen = ({ navigation, route, rootStore }) => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [nameError, setNameError] = useState("");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const { setUser } = useContext(AuthenticatedUserContext);
  const [connected, setConnected] = useState(true);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    if (username === "" || pass === "") {
      setNameError("Rellene todos los campos");
    } else {
      try {
        await Parse.User.logIn(username.toString(), pass.toString());
        Toast.show({
          placement: "top",
          render: () => {
            return <Box bg="green.200" px="2" py="1" rounded="sm" mb={5}>
              Ha iniciado sesión
            </Box>;
          }
        });
        // navigation.navigate('Signup');
      } catch (error) {
        setNameError(error.message);
        Toast.show({
          placement: "top",
          render: () => {
            return <Box bg="warning.200" px="2" py="1" rounded="sm" mb={5}>
              Usuario o contraseña incorrecto
            </Box>;
          }
        });
        return error;
      }
    }
  };

  return (
    <KeyboardAwareScrollView>
      <NativeBaseProvider>
        <Box h="100%">
          <Center>
            <Box pt={100}>
              <Image
                size={150}
                borderRadius={120}
                alt="Logo"
                source={require("../../../assets/Fish-Logo-Graphics.jpg")}
              />
            </Box>

            <VStack space={2} pl={50} pr={50} pt={50}>
              <Input
                w="100%"
                style={loginStyle.inputTransp}
                placeholder="Email"
                fontFamily="Montserrat_400Regular"
                variant="unstyled"
                keyboardType="email-address"
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
              <View style={loginStyle.inputTranspPass}>
                <Input
                  w="100%"
                  fontFamily="Montserrat_400Regular"
                  InputRightElement={
                    <Icon
                      as={
                        <MaterialIcons
                          name={show ? "visibility" : "visibility-off"}
                        />
                      }
                      onPress={handleClick}
                      size={5}
                      mr="2"
                      color="muted.400"
                    />
                  }
                  placeholder="Contraseña"
                  variant="unstyled"
                  onChangeText={(text) => setPass(text)}
                  type={show ? "text" : "password"}
                  overflow="visible"
                  value={pass}
                />
              </View>
              <TouchableOpacity onPress={onLogin}>
                <View style={[loginStyle.botonClaro, { alignItems: "center" }]}>
                  <Text
                    style={loginStyle.BtnLoginTxt}
                    fontFamily="Montserrat_Bold"
                  >
                    INICIAR SESIÓN
                  </Text>
                </View>
              </TouchableOpacity>
            </VStack>

            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color={colors.GRIS}
                fontFamily="Montserrat_400Regular"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                ¿No tienes cuenta? .{" "}
              </Text>
              <Pressable onPress={() => navigation.navigate("Signup")}>
                <Text
                  fontSize="sm"
                  color={colors.DARKBLUE}
                  fontFamily="Montserrat_Bold"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  Regístrate
                </Text>
              </Pressable>
            </HStack>
          </Center>
        </Box>
      </NativeBaseProvider>
    </KeyboardAwareScrollView>
  );
};
