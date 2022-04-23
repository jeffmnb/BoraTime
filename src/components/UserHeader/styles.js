import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    container: {
        height: 80,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
    },

    photoUser: {
        height: 60,
        width: 60,
        borderRadius: 8,
        marginRight:20,
        borderWidth:1,
        borderColor:colors.stroke
    },

    Title: {
        fontFamily:fonts.fontOutApp,
        fontSize:25,
        color:colors.heading
    },

    subtTitle:{
        fontFamily:fonts.text,
        fontSize:12,
        color:colors.body,
        marginRight:105
    },

    areaAdd: {
        height: 50,
        width: 50,
        backgroundColor: colors.primary,
        borderRadius: 8,
        justifyContent:'center',
        alignItems:'center'
    }
})