import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/layout/Header';
import SearchContainer from './src/components/containers/SearchContainer';

import AppStack from './src/components/stacks/AppStack';
import TabStack from './src/components/stacks/TabStack';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
      <NativeBaseProvider>
        <NavigationContainer>
        <Header />
        <AppStack />
        {/* <TabStack /> */}
        <StatusBar style="light" />
        </NavigationContainer>
      </NativeBaseProvider>
  )
}

export default App

