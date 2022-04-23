import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import colors from '../../styles/colors';

import { styles } from './styles';

export const CardCategory = ({ title, Icon, active, onpressCard, hasCheck }) => {
    return (
        <TouchableOpacity onPress={onpressCard}>
            <LinearGradient colors={[colors.boxes, colors.stroke]} style={[active ? styles.containerActive : styles.container]}>

               {hasCheck && <View style={[active ? styles.areaChecked : styles.areaCheck]} />}

                <Icon />

                <Text style={styles.txtCard}>{title}</Text>

            </LinearGradient>
        </TouchableOpacity>


    )
};