import { StyleSheet } from "react-native";

import colors from '../../styles/colors';
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        width: 105,
        height: 130,
        borderRadius: 8,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginRight: 9,
        opacity:0.4
    },

    containerActive: {
        width: 105,
        height: 130,
        borderRadius: 8,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginRight: 9,
    },

    txtCard: {
        fontFamily: fonts.heading,
        fontSize: 15,
        color: colors.heading
    },

    areaCheck: {
        width: 10,
        height: 10,
        backgroundColor: colors.background,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: colors.stroke,
        left: '35%',
        bottom: 4,
    },

    areaChecked: {
        width: 10,
        height: 10,
        backgroundColor: colors.primary,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: colors.stroke,
        left: '35%',
        bottom: 4
    },
});