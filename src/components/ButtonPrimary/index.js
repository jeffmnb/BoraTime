import React from 'react';

import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import ImageDiscord from '../../assets/imgDiscord.png';

export const ButtonPrimary = ({onpress, text}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onpress}>
            <View style={styles.areaSvg}>
                <Image source={ImageDiscord}/>
            </View>

            <Text style={styles.txtButton}>{text}</Text>
        </TouchableOpacity>
    )
};