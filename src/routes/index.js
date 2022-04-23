import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { StackRoute } from './stack.routes';

import { useAuth } from '../hooks/auth';

import { Welcome } from '../screens/Welcome';

export const Routes = () => {

    const { user } = useAuth();

    return (
        <NavigationContainer>
            {/* {user.id ? <StackRoute /> : <Welcome />} */}

            <StackRoute/>
        </NavigationContainer>

    )
}