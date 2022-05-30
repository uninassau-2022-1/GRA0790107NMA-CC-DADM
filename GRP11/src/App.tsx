import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';

import { AuthProvider } from './hooks/auth';
import { OptionProvider } from './hooks/option';
import { WorkoutProvider } from './hooks/workout';
import { Routes } from './Routes';

export function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <OptionProvider>
          <WorkoutProvider>
            <StatusBar
              barStyle='dark-content'
              translucent={true}
              backgroundColor={'transparent'}
              />
            <Routes />
          </WorkoutProvider>
        </OptionProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

