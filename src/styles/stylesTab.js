import { StyleSheet } from "react-native";
import { colors } from "./styleGuides";

export default StyleSheet.create({
    tab: {
        width: "100%",
        height: 70,
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 28,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: "#ffffff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 15,
        },
        shadowOpacity: 0.5,
        shadowRadius: 12,
        elevation: 19,
    },
    menuTab: {
        flex: 1,
    },
    menuTabOn: {
        width: "100%",
        height: "100%",
        paddingBottom: 14,
        paddingTop: 10,
        justifyContent: "center",
        alignItems: "center",
        color: colors.SECUNDARIO,
    },
    menuTabOff: {
        width: "100%",
        height: "100%",
        paddingBottom: 14,
        paddingTop: 10,
        justifyContent: "flex-end",
        alignItems: "center",
        borderRadius: 20,
        color: colors.GRIS,
    },
    iconos: {
        minWidth: "100%",
        maxWidth: "33.33%",
        height: 40,
        flex: 1,
        textAlign: "center",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        color: colors.GRIS,
    },

    iconosOff: {
        minWidth: "100%",
        maxWidth: "33.33%",
        height: 40,
        flex: 1,
        textAlign: "center",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        color: colors.PRIMERIO,
    },
    iconosinm: {
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: "#eeeeee",
    },
    labelOn: {
        fontFamily: "Montserrat_Medium",
        fontSize: 11,
        textAlign: "center",
        color: colors.SECUNDARIO,
    },
    labelOff: {
        fontFamily: "Montserrat_Medium",
        fontSize: 11,
        textAlign: "center",
        color: colors.GRIS,
    },

});
