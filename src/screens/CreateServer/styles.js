import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.background,
        paddingTop: getStatusBarHeight() - 20,
    },

    header: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 35,
        paddingTop: '2%',
        marginBottom: 20,
    },

    txtheader: {
        fontFamily: fonts.heading,
        fontSize: 20,
        color: colors.heading,
        marginLeft: '10%'
    },

    categoryArea: {
        width: '100%',
        paddingHorizontal: 25
    },

    txtCategory: {
        fontFamily: fonts.heading,
        fontSize: 18,
        color: colors.heading,
        marginTop: 15,
        marginBottom: 15
    },

    areaSelectServer: {
        width: '88%',
        height: 70,
        marginTop: 35,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.boxes,
        borderRadius: 8,
        flexDirection: 'row'
    },

    txtSelectServer: {
        fontFamily: fonts.heading,
        fontSize: 18,
        color: colors.heading
    },

    imageServerArea: {
        width: 60,
        height: 65,
        borderRadius: 8,
        backgroundColor: colors.boxes,
        opacity: 0.6
    },

    timeArea: {
        width: '100%',
        height: 120,
        paddingHorizontal: 25,
        flexDirection: 'row'
    },

    txtDateMonth: {
        fontFamily: fonts.heading,
        color: colors.heading,
        fontSize: 18,
        marginTop: 30,
        marginBottom: 12
    },

    bar: {
        marginHorizontal: 7,
        fontFamily: fonts.heading,
        fontSize: 20,
        color: colors.heading
    },

    descriptionArea: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        paddingHorizontal: 25,
        marginVertical: 30
    },

    headerDescription: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    txtDescription: {
        fontFamily: fonts.heading,
        fontSize: 18,
        color: colors.heading
    },

    txtMax: {
        fontFamily: fonts.text,
        fontSize: 13,
        color: colors.body,
    },

    inputDescription: {
        width: '100%',
        paddingBottom: 110,
        backgroundColor: colors.boxes,
        borderRadius: 8,
        marginTop: 12,
        fontFamily: fonts.text,
        fontSize: 13,
        color: colors.heading,
        paddingHorizontal: 15,
        paddingTop:5
    },

    buttonArea: {
        marginTop: '7%',
        marginBottom: getBottomSpace() + 35
    },

    loadingArea:{
        marginTop:'50%'
    }
})