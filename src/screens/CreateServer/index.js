import React, { useRef, useState } from 'react';

import { FlatList, Image, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform, ScrollView, ActivityIndicator, Alert } from 'react-native';

import { styles } from './styles';

import uuid from 'react-native-uuid';

import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../styles/colors';

import { categories } from '../../utils/Categories';

import { CardCategory } from '../../components/CardCategory';
import { ButtonPrimary } from '../../components/ButtonPrimary';

import { useNavigation } from '@react-navigation/native';
import SmallInput from '../../components/SmallInput';
import { ModalServer } from '../../components/ModalServer';

import { Modalize } from 'react-native-modalize';

import { Load } from '../../components/Load';

import { api } from '../../services/api';
import { CardListModal } from '../../components/CardListModal';
import { CDN_IMAGE } from '../../configs/discordAuth';
import { COLLECTION_APPOINTMENTS } from '../../configs/storage';

export const CreateServer = () => {

    const navigation = useNavigation();

    const [categoryChecked, setCategoryChecked] = useState('1');

    const modalActived = useRef(false);

    const [guilds, setguilds] = useState({});
    const [loading, setLoading] = useState(true);
    const [iconGuildSelected, setIconGuildSelected] = useState('https://github.com/discord.png');
    const [nameServerDefault, setNameServerDefault] = useState('Selecione um servidor');
    const [ownerGuild, setOwnerGuild] = useState(false);
    const [idGuildUser, setIdGuildUser] = useState('');

    const [category, setCategory] = useState('Ranqueada');

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [description, setDescription] = useState('');

    const getGuildsUser = async () => {
        modalActived.current?.open();

        setLoading(true);

        const response = await api.get('/users/@me/guilds');
        setguilds(response.data);
        // console.log(guilds);

        setLoading(false);
    };

    const hundleServerSelected = (iconId, guildId, nameId, ownerGuild) => {

        setNameServerDefault(nameId);
        setOwnerGuild(ownerGuild);
        setIdGuildUser(guildId);


        setIconGuildSelected(`${CDN_IMAGE}/icons/${guildId}/${iconId}.png`);

        console.log(iconGuildSelected);

        modalActived.current?.close();

    };

    const hundleCategorySelected = (id, categoryName) => {
        setCategory(categoryName);
        setCategoryChecked(id);
    }

    const hundleSave = async () => {

        if (nameServerDefault != 'Selecione um servidor' && day != '' && month != '' && hour != '' && minute != '' && description != '') {
            if (day.length == 2 && month.length == 2 && hour.length == 2 && minute.length == 2) {
                const newAppointment = {
                    id: uuid.v4(),
                    guild: nameServerDefault,
                    guildId: idGuildUser,
                    category: category,
                    date: `${day}/${month} às ${hour}:${minute}h`,
                    description: description,
                    owner: ownerGuild,
                    iconguild: iconGuildSelected != `https://cdn.discordapp.com/icons/${idGuildUser}/null.png` ? iconGuildSelected : 'https://github.com/discord.png',
                };

                console.log(newAppointment);

                const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS); //COLLECTION_APPOINTMENTS
                ''
                const appointment = storage ? JSON.parse(storage) : [];

                await AsyncStorage.setItem(COLLECTION_APPOINTMENTS, JSON.stringify([...appointment, newAppointment])); //COLLECTION_APPOINTMENTS

                // console.log(newAppointment);

                navigation.navigate('Main');
            } else {
                Alert.alert('','Campos de data necessitam de dois caracteres.')
            }


        } else {
            return Alert.alert('Ei fera!', 'Você esqueceu de preencher os campos.')
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.container}>
                    <LinearGradient colors={[colors.background, colors.boxes]} style={styles.header}>

                        <View style={styles.header}>
                            <View style={{ position: 'absolute', left: 0 }}>
                                <FontAwesome5 name="arrow-left" size={24} color={"#FFF"} onPress={() => navigation.goBack()} />
                            </View>

                            <Text style={styles.txtheader}>Agendar partida</Text>
                        </View>

                    </LinearGradient>

                    <View style={styles.categoryArea}>
                        <Text style={styles.txtCategory}>Categoria</Text>

                        <FlatList
                            keyExtractor={(item) => String(item.id)}
                            data={categories}
                            renderItem={({ item }) => (
                                <CardCategory Icon={item.icon} title={item.title} hasCheck active={categoryChecked == item.id} onpressCard={() => hundleCategorySelected(item.id, item.title)} />
                            )}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                    <TouchableOpacity style={styles.areaSelectServer} onPress={getGuildsUser}>

                        <Image source={{ uri: iconGuildSelected }} style={styles.imageServerArea} />

                        <Text style={styles.txtSelectServer}>{nameServerDefault}</Text>

                        <MaterialIcons name="keyboard-arrow-right" size={28} color={colors.body} style={{ right: '5%' }} />
                    </TouchableOpacity>

                    <View style={styles.timeArea}>

                        <View style={{ marginRight: '16%' }}>
                            <Text style={styles.txtDateMonth}>Dia e Mês</Text>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <SmallInput placeHolder={'10'} onchangeText={(text) => setDay(text)} />
                                <Text style={styles.bar}>/</Text>
                                <SmallInput placeHolder={'06'} onchangeText={(text) => setMonth(text)} />
                            </View>
                        </View>

                        <View>
                            <Text style={styles.txtDateMonth}>Horário</Text>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <SmallInput placeHolder={'23'} onchangeText={(text) => setHour(text)} />
                                <Text style={styles.bar}>:</Text>
                                <SmallInput placeHolder={'30'} onchangeText={(text) => setMinute(text)} />
                            </View>
                        </View>

                    </View>


                    <View style={styles.descriptionArea}>
                        <View style={styles.headerDescription}>
                            <Text style={styles.txtDescription}>Descrição</Text>
                            <Text style={styles.txtMax}>Max 100 caracteres</Text>
                        </View>

                        <TextInput style={styles.inputDescription} placeholder={'Conte mais sobre este servidor aos colegas...'} placeholderTextColor={'rgba(255,255,255,0.2)'} onChangeText={(text) => setDescription(text)} />

                    </View>

                    <View style={styles.buttonArea}>
                        <ButtonPrimary text="Agendar Partida" onpress={hundleSave} />
                    </View>

                </View>

            </ScrollView>

            <Modalize ref={modalActived} modalHeight={760} modalStyle={{ backgroundColor: colors.background, paddingHorizontal: 25, paddingTop: '10%' }}>


                {

                    loading ?

                        <View style={styles.loadingArea}>
                            <Load />
                        </View>

                        :

                        <FlatList
                            keyExtractor={(item) => String(item.id)}
                            data={guilds}
                            renderItem={(item) => (
                                <CardListModal nameGuild={item.item.name} guildId={item.item.id} iconId={item.item.icon} onpress={() => hundleServerSelected(item.item.icon, item.item.id, item.item.name, item.item.owner)} />
                            )}
                        />
                }



            </Modalize>
        </KeyboardAvoidingView>
    )
}