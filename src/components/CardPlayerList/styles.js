import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 90,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.boxes,
    },

    aboutUser: {
        alignItems: 'flex-start',
        marginLeft: 16,

    },

    imageUser: {
        height: 60,
        width: 60,
        borderRadius: 8,
        marginRight: 20,
        borderWidth: 1,
        borderColor: colors.stroke
    },

    txtNameUser: {
        fontFamily: fonts.heading,
        fontSize: 19,
        color: colors.heading
    },

    txtStatus: {
        fontFamily: fonts.subText,
        fontSize: 13,
        color: colors.body,
        marginLeft:5
    },
})