import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ChatScreen from './page/ChatScreen';
import SearchScreen from './page/SearchScreen';

export default function App() {
  return (
    // <ChatScreen />
    <SearchScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
