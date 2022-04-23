import React, { useEffect } from 'react';

import { Alert, FlatList, Image, Platform, ScrollView, Share, Text, View } from 'react-native';

import { styles } from './styles';
import colors from '../../styles/colors';

import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { CardPlayerList } from '../../components/CardPlayerList';

import { ButtonPrimary } from '../../components/ButtonPrimary';
import { Load } from '../../components/Load';

import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import { api } from '../../services/api';
import { useState } from 'react/cjs/react.development';

import * as Linking from 'expo-linking';
import { useCallback } from 'react';

import StatusDisp from '../../assets/StatusDisp.svg';
import StatusOcu from '../../assets/StatusOcu.svg';
import StatusIndisp from '../../assets/StatusIndisp.svg';


export const AboutServer = () => {

    const navigation = useNavigation();

    const Route = useRoute();

    const { guildSelected } = Route.params;

    console.log(guildSelected);

    const [widget, setWidget] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchGuildwidget = async () => {
        try {
            setLoading(true);
            const response = await api.get(`/guilds/${guildSelected.guildId}/widget.json`);
            setWidget(response.data);
            console.log(response);
            setLoading(false);

        } catch (error) {
            Alert.alert('', 'Ei fera! Habilite o "Widget", dentro das configuracões do servidor.')
            setLoading(true);
        }
    };


    const hundleShareGuild = async () => {
        const message = Platform.OS === 'ios'
            ? `Junte-se a ${guildSelected.guild}`
            : widget.instant_invite;

        Share.share({
            message: message,
            url: widget.instant_invite
        });
    };

    const hundleCallServerOut = () => {
        Linking.openURL(widget.instant_invite);
    }


    useEffect(() => {
        fetchGuildwidget();
    }, []);

    useFocusEffect(useCallback(() => {
        fetchGuildwidget();
    }, []))


    return (
        <View style={styles.container}>

            <LinearGradient colors={[colors.background, colors.boxes]} style={styles.header}>

                <View style={styles.header}>
                    <View style={{ position: 'absolute', left: 0 }}>
                        <FontAwesome5 name="arrow-left" size={24} color={"#FFF"} onPress={() => navigation.goBack()} />
                    </View>

                    <Text style={styles.txtCategory}>{guildSelected.category}</Text>
                    <View style={{ position: 'absolute', right: 0 }}>
                        {guildSelected.owner && <Ionicons name="md-share-social-sharp" size={28} color={colors.primary} onPress={loading ? () => Alert.alert('', 'Servidor offline') : hundleShareGuild} />}
                    </View>

                </View>

            </LinearGradient>

            <View style={{ width: '100%' }}>
                <Image source={{ uri: guildSelected.iconguild }} style={{ width: '100%', height: 250, opacity: 0.2 }} />

                <View style={styles.areaImageContent}>
                    <Text style={styles.txtTitle}>{guildSelected.guild}</Text>
                    <Text style={styles.txtSubTitle}>{guildSelected.description}</Text>
                </View>
            </View>



            <View style={styles.areaPlayers}>
                <View style={styles.headerPlayers}>
                    <Text style={styles.txtHeaderPlayer}>Jogadores</Text>
                    <Text style={styles.txtHeaderNumPlayers}>{loading ? 'Offline' : `Disponíveis: ${widget.presence_count}`}</Text>
                </View>

                {
                    loading ?

                        <Load />

                        :

                        <FlatList
                            keyExtractor={(item) => String(item.id)}
                            data={widget.members}
                            renderItem={({ item }) => (
                                <CardPlayerList image={item.avatar_url} name={item.username}

                                    status={
                                        [item.status == 'online' && (<><StatusDisp /> <Text>Online</Text></>),
                                        item.status == 'dnd' && (<><StatusIndisp /> <Text>Indisponível</Text></>),
                                        item.status == 'idle' && (<><StatusOcu /> <Text>Ocupado</Text></>)
                                        ]
                                    }
                                />
                            )}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ marginTop: 5 }}
                        />}

            </View>

            <View style={{ position: 'absolute', bottom: '2.5%' }}>
                {!loading && <ButtonPrimary text={'Entrar no servidor'} onpress={hundleCallServerOut} />}
            </View>

        </View>
    )
};