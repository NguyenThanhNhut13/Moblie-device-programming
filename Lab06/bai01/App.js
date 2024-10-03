import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "./page/SearchScreen";
import ChatScreen from  "./page/ChatScreen";
import StartScreen from "./page/StartScreen";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator  initialRouteName="Start" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
