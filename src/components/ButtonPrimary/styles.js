import { StyleSheet } from "react-native";

import colors from '../../styles/colors';
import fonts from "../../styles/fonts";


import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        width: 275,
        height: 55,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        borderRadius: 8,
        justifyContent:'center',
        alignItems: 'center',
        paddingHorizontal: 25,
        marginBottom: getBottomSpace(),
    },

    txtButton: {
        fontFamily: fonts.text,
        color: "#FFFFFF",
        fontSize: 15,
        left:'37%'
    },

    areaSvg: {
        position: 'absolute',
        left: 0,
        width: 50,
        height: 50,
        borderRightWidth: 1,
        borderColor: '#991F36',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 5,
    },

    imageDiscord: {
        width: 30,
        height: 30,
    }
});