import { StyleSheet } from "react-native";

import colors from '../../styles/colors';
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.boxes,
    },

    areaImage: {
        width: 64,
        height: 68,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.stroke,
        marginRight: '7%'
    },

    rankAbout: {
        flex:1,
        height: 68,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingLeft: 10,
        marginLeft: '10%',
    },

    title: {
        fontFamily: fonts.heading,
        fontSize: 18,
        color: colors.heading
    },

    subTitle: {
        fontFamily: fonts.subText,
        fontSize: 13,
        color: colors.body,
        lineHeight: 16
    },

    txtDate: {
        fontFamily: fonts.text,
        fontSize: 13,
        color: colors.heading,
        lineHeight: 25,
        marginLeft: 10
    },

    txtRanqueada: {
        fontFamily: fonts.subText,
        fontSize: 13,
        color: colors.body,
    },


    txtOwnerGuild: {
        fontFamily: fonts.text,
        fontSize: 13,
        color: colors.primary,
        marginLeft: 7
    },

    txtNotOwnerGuild: {
        fontFamily: fonts.text,
        fontSize: 13,
        color: colors.online,
        marginLeft: 7,
    },

    areaTrash:{
        width:80,
        height:100,
        backgroundColor:colors.primary,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        marginLeft:10
    }
});