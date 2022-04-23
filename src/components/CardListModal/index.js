import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../styles/colors';

import DiscordImg from '../../assets/discord.svg';

import { CDN_IMAGE } from '../../configs/discordAuth';

export const CardListModal = ({ nameGuild, guildId, iconId, onpress, uriIcon }) => {

    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

    return (
        <TouchableOpacity style={styles.container} onPress={onpress}>
            {
                iconId ?

                    <Image style={styles.areaImage} source={{ uri: uri }} />

                    :

                    <View style={styles.areaImage}>
                        <DiscordImg width={45} height={45} />
                    </View>
            }


            <View style={styles.areaAbout}>
                <Text style={styles.txtTitle}>{nameGuild}</Text>
                <Text style={styles.txtSubTitle}>Servidor</Text>
            </View>

            <View style={styles.arrowArea}>
                <MaterialIcons name="keyboard-arrow-right" size={32} color={colors.body} />
            </View>

        </TouchableOpacity>
    )
}
