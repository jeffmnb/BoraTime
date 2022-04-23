import React, { useCallback, useEffect, useRef, useState } from 'react';

import { FlatList, Modal, SafeAreaView, Text, View } from 'react-native';
import { CardCategory } from '../../components/CardCategory';
import { Load } from '../../components/Load';
import { UserHeader } from '../../components/UserHeader';

import { styles } from './styles';

import { categories } from '../../utils/Categories';
import { CardGameList } from '../../components/CardGameList';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ModalSignOut } from '../../components/ModalSignOut';
import { useAuth } from '../../hooks/auth';
import { COLLECTION_APPOINTMENTS, DATABASE_NAME } from '../../configs/storage';
import { ModalDeleteServer } from '../../components/ModalDeleteServer';

export const Main = () => {

    const { SignOut } = useAuth();

    const Navigation = useNavigation();

    const [cardCheck, setCardCheck] = useState('Ranqueada');

    const [appointments, setAppointments] = useState([]);
    const [appointmentsFiltered, setAppointmentsFiltered] = useState([]);

    const [numAppointments, setNumAppointments] = useState(0);

    const [loading, setLoading] = useState(true);

    const [modalSignOut, setModalSignOut] = useState(false);
    const [modalDeleteServer, setModalDeleteServer] = useState(false);
    const [serverToDelete, setServerToDelete] = useState({});

    const getDataAppointments = async () => {

        setLoading(true);

        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

        const storaged = response ? JSON.parse(response) : [];
        // console.log(storaged);

        setAppointments(storaged);
        setAppointmentsFiltered(storaged);

        setNumAppointments(storaged.length);

        setLoading(false);
    };


    useEffect(() => {
        getDataAppointments();
    }, []);

    const hundlePressCard = (card) => {

        const dataFiltered = appointments.filter(item => item.category.includes(card));
        setCardCheck(card);
        setNumAppointments(dataFiltered.length);
        // console.log(dataFiltered);

        setAppointmentsFiltered(dataFiltered);
    };

    const hundleAboutServer = (guildSelected) => {
        Navigation.navigate('AboutServer', { guildSelected });
    };

    const hundlePressIconUser = () => {
        setModalSignOut(true);
    };

    const hundlePressClose = () => {
        setModalSignOut(false);
    };

    const hundleDeleteServer = (item) => {
        setModalDeleteServer(true);
        setServerToDelete(item.id);
        console.log(serverToDelete);
    };

    const closeModalDelete = () => {
        setModalDeleteServer(false);
    };

    const deleteServer = async () => {

        const data = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

        const storaged = data ? JSON.parse(data) : {};

        const newData = storaged.filter((item) => {
            return item.id != serverToDelete
        });

        AsyncStorage.setItem(COLLECTION_APPOINTMENTS, JSON.stringify(newData));

        setModalDeleteServer(false);

        getDataAppointments();
    };

    useFocusEffect(useCallback(() => {
        getDataAppointments();
    }, []))

    return (
        <SafeAreaView style={styles.container}>
            <UserHeader onpressAdd={() => Navigation.navigate('CreateServer')} onpressIconUser={hundlePressIconUser} />

            <View style={styles.areaCategories}>
                <FlatList
                    keyExtractor={(item) => String(item.id)}
                    data={categories}
                    renderItem={({ item }) => (
                        <CardCategory title={item.title} Icon={item.icon} onpressCard={() => hundlePressCard(item.title)} active={cardCheck == item.title} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 40 }}
                />
            </View>



            <View style={styles.headerList}>
                <Text style={styles.txtTitleHeaderList}>Partidas Agendadas</Text>
                <Text style={styles.txtTotalList}>{`Total ${numAppointments}`}</Text>
            </View>

            <View style={{ width: '100%' }}>

                {
                    loading ?
                        <View>
                            <Load />
                        </View>



                        :
                        <View style={{ height: 400 }}>
                            <FlatList
                                keyExtractor={(item) => String(item.id)}
                                data={appointmentsFiltered}
                                renderItem={({ item }) => (
                                    <CardGameList nameGuild={item.guild}
                                        dateGuild={item.date} ownerGuild={item.owner}
                                        imageGuild={item.iconguild} category={item.category}
                                        onpress={() => hundleAboutServer(item)}
                                        onpressTrash={() => hundleDeleteServer(item)}
                                    />
                                )}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ paddingBottom: 20 }}
                            />
                        </View>


                }


            </View>


            <Modal animationType='slide' visible={modalSignOut} transparent onRequestClose={hundlePressClose}>
                <ModalSignOut onPressOut={hundlePressClose} onPressNo={hundlePressClose} onPressYes={SignOut} />
            </Modal>

            <Modal animationType='slide' visible={modalDeleteServer} transparent onRequestClose={hundlePressClose}>
                <ModalDeleteServer onPressOut={closeModalDelete} onPressNo={closeModalDelete} onPressYes={deleteServer} />
            </Modal>

        </SafeAreaView>
    )
};