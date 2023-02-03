import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/layout/Header';
import SearchContainer from './src/components/containers/SearchContainer';

import AppStack from './src/components/stacks/AppStack';
import TabStack from './src/components/stacks/TabStack';

const App = () => {
  return (
      <NativeBaseProvider>
        <Header />
        <AppStack />
        {/* <TabStack /> */}
        <StatusBar style="light" />
      </NativeBaseProvider>
  )
}

export default App

