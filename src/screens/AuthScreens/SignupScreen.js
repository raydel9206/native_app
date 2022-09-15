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
  Image,
} from "native-base";
import { MaterialIcons, Entypo, AntDesign } from "@expo/vector-icons";
import { ImageBackground, View } from "react-native";
import React, { useContext, useState } from "react";
import loginStyle from "../../styles/loginStyle";
import { AuthenticatedUserContext } from "../../navigation/AuthenticatedUserProvider";
import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { colors } from "../../styles/styleGuides";

import AsyncStorage from '@react-native-async-storage/async-storage';
import  Parse  from "parse/react-native";

export const SignupScreen = ({ navigation, route, rootStore }) => {
  const { setUser } = useContext(AuthenticatedUserContext);

  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [nameError, setNameError] = useState("");

  const [connected, setConnected] = useState(true);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [loading, setLoading] = useState(false);

  const submitAndClear = async () => {
    setUserName("");
    setFullName("");
    setPass("");
    setNameError("");
  };

  const onHandleSignup = async () => {
    if (
      username.trim() === "" ||
      username === undefined ||
      email.trim() === "" ||
      email === undefined ||
      pass.trim() === "" ||
      pass === undefined
    ) {
      setNameError("Por favor complete los datos");
    } else {
      try {
        Parse.User.logOut();
        let user = new Parse.User();
        user.set("fullname", fullname);
        user.set("username", username);
        user.set("email", email);
        user.set("password", pass);
        const result = await user.signUp();

        AsyncStorage.setItem("sessionToken", result.getSessionToken());
        AsyncStorage.setItem("username", result.getUsername());

        submitAndClear;
        navigation.navigate("Login");
      } catch (error) {
        console.log(error);
        setNameError(error.message);
      }
    }
  };

  return (
    <KeyboardAwareScrollView>
      <NativeBaseProvider>
        <Center>
          <Box pt={100}>
            <Image
              size={150}
              borderRadius={120}
              alt="Logo"
              source={require("../../../assets/Fish-Logo-Graphics.jpg")}
            />
          </Box>
          <VStack space={2} mt={50} ml={50} mr={50}>
            <Input
              style={loginStyle.inputTransp}
              w="100%"
              placeholder="Nombre completo"
              color="#ffffff"
              fontFamily="Montserrat_400Regular"
              variant="unstyled"
              keyboardType="default"
              onChangeText={(text) => setFullName(text)}
              value={fullname}
            />

            <Input
              style={loginStyle.inputTransp}
              w="100%"
              placeholder="Usuario"
              color="#ffffff"
              fontFamily="Montserrat_400Regular"
              variant="unstyled"
              keyboardType="default"
              onChangeText={(text) => setUserName(text)}
              value={username}
            />

            <Input
              style={loginStyle.inputTransp}
              w="100%"
              placeholder="Email"
              color="#ffffff"
              variant="unstyled"
              fontFamily="Montserrat_400Regular"
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
              value={email}
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
                style={loginStyle.inputTranspTxt}
                variant="unstyled"
                onChangeText={(text) => setPass(text)}
                type={show ? "text" : "password"}
                overflow="visible"
                color="#ffffff"
                value={pass}
              />
            </View>

            <View style={loginStyle.inputTranspPass}>
              <Input
                w="100%"
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
                placeholder="Confirmar contraseña"
                fontFamily="Montserrat_400Regular"
                style={loginStyle.inputTranspTxt}
                variant="unstyled"
                onChangeText={(text) => setPassConfirm(text)}
                type={show ? "text" : "password"}
                overflow="visible"
                color="#ffffff"
                value={passConfirm}
              />
            </View>

            <TouchableOpacity onPress={onHandleSignup}>
              <View style={[loginStyle.botonClaro, { alignItems: "center" }]}>
                <Text
                  fontFamily="Montserrat_Bold"
                  style={loginStyle.BtnLoginTxt}
                >
                  REGISTRARME
                </Text>
              </View>
            </TouchableOpacity>
          </VStack>

          <HStack mt="6" justifyContent="center">
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                fontSize="sm"
                fontFamily="Montserrat_Bold"
                color={colors.DARKBLUE}
                _dark={{
                  color: "warmGray.200",
                }}
              >
                INICIAR SESIÓN
              </Text>
            </Pressable>
          </HStack>
        </Center>
      </NativeBaseProvider>
    </KeyboardAwareScrollView>
  );
};
