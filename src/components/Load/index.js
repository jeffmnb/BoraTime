import React from 'react';

import {
    ActivityIndicator,
    View
} from 'react-native';
import colors from '../../styles/colors';

import { styles } from './styles';

export const Load = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color={colors.primary} />
        </View>
    );
}