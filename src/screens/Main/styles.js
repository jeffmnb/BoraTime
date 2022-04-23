import { StyleSheet } from "react-native";

import colors from '../../styles/colors';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.background,
        paddingTop: getStatusBarHeight(),
        paddingHorizontal:25
    },

    areaCategories:{
        height:170,
        width:'100%'
    },

    headerList:{
         width:'100%',
         height:50,
         marginTop:40,
         flexDirection:'row',
         justifyContent:'space-between',
         alignItems:'center',
         marginBottom:20
    },

    txtTitleHeaderList:{
        fontFamily:fonts.heading,
        fontSize:20,
        color:colors.heading,
    },

    txtTotalList:{
        fontFamily: fonts.text,
        fontSize:14,
        color:colors.body
    }

    
});