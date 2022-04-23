import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

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
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#7289da',
    },

    areaAbout: {
        marginLeft: 20,
    },

    txtTitle: {
        fontFamily:fonts.heading,
        fontSize:18,
        color:colors.heading,
        paddingBottom:'5%'
    },

    txtSubTitle: {
        fontFamily:fonts.text,
        fontSize:13,
        color:colors.body
    },

    arrowArea:{
        width:35,
        height:35,
        position:'absolute',
        right:0,
        justifyContent:'center',
        alignItems:'center'
    }
})