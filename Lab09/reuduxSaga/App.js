import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskListScreen from './page/TaskListScreen';

export default function App() {
  return (
    <Provider store={store}>
      <TaskListScreen />
    </Provider>
  );
}
