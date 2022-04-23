import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { CardListModal } from '../CardListModal';

export const ModalServer = () => {
    return (
        <View style={styles.container}>
            <CardListModal />
        </View>
    )
}
