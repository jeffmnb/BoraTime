import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './styles';

const SmallInput = ({onchangeText, placeHolder}) => {
    return (
        <TextInput style={styles.container} keyboardType='numeric' maxLength={2} placeholder={placeHolder} placeholderTextColor={'rgba(255,255,255,0.2)'} onChangeText={onchangeText}/>
    )
}

export default SmallInput;