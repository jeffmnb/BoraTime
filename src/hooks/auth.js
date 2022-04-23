import React, { createContext, useContext, useEffect, useState } from 'react';

import * as AuthSession from 'expo-auth-session';

import { SCOPE, CLIENT_ID, CDN_IMAGE, REDIRECT_URI, RESPONSE_TYPE } from '../configs'; //atalhos que criei para acessar o link de autenticacao do discord;

import { api } from '../services/api';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { COLLECTION_USER } from '../configs/storage'; // atalho que criei para nomear o local do asyncStorage;

export const AuthContext = createContext({}); //cria um contexto;

export const AuthProvider = ({ children }) => { //colocamos esse children para podermos usar esse componente por volta de nossas rotas;

    const [user, setUser] = useState({});

    const SignIn = async () => {
        try {

            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;


            const { type, params } = await AuthSession.startAsync({ authUrl }); //inicia uma requisicao para uma determinada api, nesse caso a do discord;

            if (type === 'success' && !params.error) {
                api.defaults.headers.authorization = `Bearer ${params.access_token}`; //setando o token em todas as requisicoes que formos fazer;

                const userInfo = await api.get('/users/@me'); //rota que a documentacao do discord pede para acessarmos os dados dos users;


                const firstName = userInfo.data.username.split(' ')[0]; // criando uma prop para guardar o primeiro nome do user para nao estragar o style da page;

                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`; // atalho para conseguir pegar a image do user;

                const userData = {  // criando um obj com os dados do user, para ser usado tanto para salvar no Storage quanto para verificar se o user ja esta autenticado;
                    ...userInfo.data,
                    firstName,
                    token: params.access_token
                }

                await AsyncStorage.setItem(COLLECTION_USER, JSON.stringify(userData));

                setUser(userData);

            };

        } catch (error) {
            throw new Error('Não foi possível autentificar');
        }
    }

    const SignOut = async () => {
        setUser({});
        // await AsyncStorage.removeItem(COLLECTION_USER);
    };

    const loadUserStoragedData = async () => { //funcao que carrega os dados salvos no asyncStorage do user, mandando o token dele e setando o setado do user;

        const storage = await AsyncStorage.getItem(COLLECTION_USER);

        if (storage) {
            const userLogged = JSON.parse(storage);
            api.defaults.headers.authorization = `Bearer ${userLogged.token}`;

            setUser(userLogged);
        }
    }


    useEffect(() => {
        loadUserStoragedData();
    }, []);

    return (
        <AuthContext.Provider value={{ user, SignIn, SignOut }}>
            {children}
        </AuthContext.Provider>
    )

};


export const useAuth = () => {

    const context = useContext(AuthContext);

    return context;
};
