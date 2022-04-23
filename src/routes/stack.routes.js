import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Main } from '../screens/Main';
import { AboutServer } from '../screens/AboutServer';
import { CreateServer } from '../screens/CreateServer';

export const StackRoute = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="AboutServer" component={AboutServer} />
            <Stack.Screen name="CreateServer" component={CreateServer} />
        </Stack.Navigator>
    )
};