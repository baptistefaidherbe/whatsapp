import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '~/navigation/Route';
import { user } from '~/types';
import BottomTab from './BottomTab';

type RootStackParamList = {
    bottomApps: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  options={{ headerShown: false }} name={Routes.BOTTOM_APPS} component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
