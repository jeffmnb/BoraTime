import React from 'react';

import { Text, TouchableOpacity, View, Image } from 'react-native';

import { styles } from './styles';

import IconPlayer from '../../assets/player.svg';
import IconPlayerConvite from '../../assets/playerConvite';
import IconCalendar from '../../assets/calendar.svg';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import { Feather } from '@expo/vector-icons';
import colors from '../../styles/colors';

export const CardGameList = ({ onpress, onpressTrash, imageGuild, nameGuild, dateGuild, ownerGuild, category }) => {
    return (
        <Swipeable renderRightActions={() => (
            <TouchableOpacity style={styles.areaTrash} onPress={onpressTrash}>
                <Feather name="trash-2" size={24} color={colors.heading} />
            </TouchableOpacity>
        )}>

            <TouchableOpacity style={styles.container} onPress={onpress}>

                <View>
                    <Image source={{ uri: imageGuild ? imageGuild : 'https://github.com/discord.png' }} style={styles.areaImage} />
                </View>

                <View style={{ height: 60, justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Text style={styles.title}>{nameGuild}</Text>
                    {/* <Text style={styles.subTitle}>League of Legends</Text> */}

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <IconCalendar />
                        <Text style={styles.txtDate}>{dateGuild}</Text>
                    </View>
                </View>

                <View style={styles.rankAbout}>
                    <Text style={styles.txtRanqueada}>{category}</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', width: 100, height: 37 }}>

                        {
                            ownerGuild ?

                                <IconPlayer />

                                :

                                <IconPlayerConvite />
                        }

                        <Text style={[ownerGuild ? styles.txtOwnerGuild : styles.txtNotOwnerGuild]}>{[ownerGuild ? 'Anfitrião' : 'Visitante']}</Text>
                    </View>

                </View>
            </TouchableOpacity>

        </Swipeable>
    )
};