import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    container:{
        width:65,
        height:50,
        backgroundColor:colors.boxes,
        borderRadius:8,
        textAlign:'center',
        color:colors.heading,
        fontFamily:fonts.text,
        fontSize:16,
        borderWidth:1,
        borderColor:colors.stroke
    }
})