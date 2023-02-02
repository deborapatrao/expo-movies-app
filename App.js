import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import SearchContainer from './src/components/containers/SearchContainer';
import Header from './src/components/layout/Header';
import AppStack from './src/components/stacks/AppStack';

const App = () => {
  return (
      <NativeBaseProvider>
        {/* <Header />
        <SearchContainer /> */}
        <AppStack />
        <StatusBar style="light" />
      </NativeBaseProvider>
  )
}

export default App

