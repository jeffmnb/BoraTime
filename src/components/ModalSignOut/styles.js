import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 175,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },

    txtSignOut: {
        fontFamily: fonts.fontOutApp,
        fontSize: 24,
        color: colors.heading
    },

    txtBora: {
        fontFamily: fonts.fontOutApp,
        color: colors.heading,
        fontSize: 24,
        fontWeight: 'bold'
    },

    txtTime: {
        fontFamily: fonts.fontOutApp,
        color: colors.primary,
        fontSize: 24,
        fontWeight: 'bold'
    },

    areaButtons: {
        width: '100%',
        height: 85,
        marginTop: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },

    buttonNot: {
        width: 160,
        height: 56,
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonYes: {
        width: 160,
        height: 56,
        backgroundColor: colors.primary,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },

    txtButton: {
        fontFamily: fonts.text,
        fontSize: 16,
        color: colors.heading,
        fontWeight:'bold'
    }

});