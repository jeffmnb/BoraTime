import React from 'react';

import { Image, View, Text } from 'react-native';

import { styles } from './styles';

export const CardPlayerList = ({ image, name, status }) => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={{ uri: image }} style={styles.imageUser} />
            </View>

            <View style={styles.aboutUser}>
                <Text style={styles.txtNameUser}>{name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    {status =='online' && <StatusDisp />}
                    {status == 'Ocupado' && <StatusOcu />}
                    {status == 'Indisponível' && <StatusIndisp />}
                    <Text style={styles.txtStatus}>{status}</Text>
                </View>


            </View>
        </View>
    )
}