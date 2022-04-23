import React from 'react';

import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import { styles } from './styles';

export const ModalDeleteServer = ({ onPressOut, onPressNo, onPressYes }) => {
    return (
        <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)' }} activeOpacity={1} onPress={onPressOut}>
            <View style={styles.container}>
                <Text style={styles.txtModal}>Deseja deletar este server?</Text>

                <View style={styles.areaButtons}>
                    <TouchableOpacity style={styles.buttonNot} activeOpacity={0.7} onPress={onPressNo}>
                        <Text style={styles.txtButton}>Não</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonYes} activeOpacity={0.7} onPress={onPressYes}>
                        <Text style={styles.txtButton}>Sim</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}