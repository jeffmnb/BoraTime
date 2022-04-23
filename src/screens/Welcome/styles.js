import { StyleSheet } from "react-native";

import colors from '../../styles/colors';

import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background
    },

    image: {
        width: '100%',
        height: 360,
    },

    title: {
        fontFamily: fonts.heading,
        fontSize: 35,
        color: colors.heading,
        textAlign: 'center'
    },

    subTitle: {
        fontFamily: fonts.subText,
        color: colors.heading,
        fontSize: 13,
        textAlign: 'center',
        marginTop: 20,
        lineHeight: 23,
        marginBottom: 60,
    }

});