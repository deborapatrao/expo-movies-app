import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import SearchContainer from './src/components/containers/SearchContainer';
import Header from './src/components/layout/Header';

export default function App() {
  return (
      <NativeBaseProvider>
        <Header />
        <SearchContainer />
        <StatusBar style="light" />
      </NativeBaseProvider>
  );
}


