import { StyleSheet } from "react-native";
import { colors } from "./styleGuides";

export default StyleSheet.create({
  inputTransp: {
    width: "100%",
    height: 44,
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    padding: 10,
    color: colors.DARKBLUE,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: colors.GRISCLARO,
  },
  inputTranspPass: {
    width: "100%",
    height: 44,
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: colors.GRISCLARO,
  },

  botonClaro: {
    width: "100%",
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#ffffff"
  },

  BtnLoginTxt: {
    width: "100%",
    fontSize: 14,
    justifyContent: "center",
    textAlign: "center",
    letterSpacing: 0,
    color: colors.LIGTHBLUE,
  },
});
