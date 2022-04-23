import React from 'react';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../UserHeader/styles';

import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../styles/colors';
import { useAuth } from '../../hooks/auth';

export const UserHeader = ({ onpressAdd, onpressIconUser }) => {


    const { user } = useAuth();
    console.log(user);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onpressIconUser}>
                <Image source={{ uri: user.avatar == `https://cdn.discordapp.com/avatars/${user.id}/null.png` ? "https://github.com/discord.png" : user.avatar }} style={styles.photoUser} />
            </TouchableOpacity>

            <View>
                <Text style={styles.Title}>Olá, <Text style={{ fontWeight: 'bold' }}>{user.firstName}</Text></Text>
                <Text style={styles.subtTitle}>Hoje é dia de vitória</Text>
            </View>

            <TouchableOpacity style={styles.areaAdd} onPress={onpressAdd}>
                <MaterialIcons name="add" size={28} color={colors.heading} onPress={onpressAdd} />
            </TouchableOpacity>
        </View>
    )
};