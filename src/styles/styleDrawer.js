
import { colors } from "./styleGuides";
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: colors.DARKBLUE,
        marginBottom: 20,
    },
    textheader: {
       color: colors.GRISCLARO,
       fontFamily:"Montserrat_Bold",
       fontSize: 12,
    },
});