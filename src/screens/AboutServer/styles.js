import { StyleSheet } from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.background,
        paddingTop: getStatusBarHeight(),
    },

    header: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 35,
        paddingTop:20,
        paddingBottom:25
    },

    txtCategory: {
        color: colors.heading,
        fontSize: 22,
        fontFamily: fonts.heading
    },

    areaImageContent: {
        position:'absolute',
        width: '100%',
        height: 240,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingHorizontal: 25,
        paddingBottom: 30,
    },

    txtTitle: {
        fontFamily: fonts.heading,
        fontSize: 28,
        color: colors.heading,
        marginBottom: 18
    },

    txtSubTitle: {
        fontFamily: fonts.subText,
        fontSize: 13,
        color: colors.heading
    },

    areaPlayers: {
        height:368,
        width: '100%',
        marginBottom:45,
        paddingHorizontal: 25
    },

    headerPlayers: {
        width: '100%',
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    txtHeaderPlayer: {
        fontFamily: fonts.heading,
        fontSize: 18,
        color: colors.heading
    },

    txtHeaderNumPlayers: {
        fontFamily: fonts.subText,
        fontSize: 13,
        color: colors.body
    }
})