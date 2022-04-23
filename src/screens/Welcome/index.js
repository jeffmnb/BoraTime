import React, { useState } from 'react';

import { Image, SafeAreaView, Text, Alert, ActivityIndicator } from 'react-native';

import { styles } from './styles';

import ImageWelcome from '../../assets/illustration.png';
import { ButtonPrimary } from '../../components/ButtonPrimary';

import { useAuth } from '../../hooks/auth'; // pegando a funcao que traz o usuario
import colors from '../../styles/colors';

export const Welcome = () => {

    const { userasdasdas, SignIn } = useAuth(); //pegando os dados que o nosso context trouxe.

    const [loading, setLoading] = useState(false);

    const hundleSignIn = async () => {
        try {
            setLoading(true);
            await SignIn();
            
            setTimeout(() => {
                setLoading(false)
            }, 3000);

        } catch (error) {
            Alert.alert(error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>

            <Image source={ImageWelcome} style={styles.image} />

            <Text style={styles.title} >Conecte-se {'\n'} e organize suas {'\n'} jogatinas</Text>

            <Text style={styles.subTitle}>Crie grupos para jogar seus games {'\n'} favoritos com seus amigos</Text>

            {

                loading ?

                    <ActivityIndicator color={colors.primary} size={25}/>
                    :
                    <ButtonPrimary text={'Entrar com Discord'} onpress={hundleSignIn} />
            }

        </SafeAreaView>
    )
};