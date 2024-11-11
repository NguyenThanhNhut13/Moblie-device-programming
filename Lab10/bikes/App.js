import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import StartScreen from './pages/StartScreen';
import ProductScreen from './pages/ProductScreen';
import ProductDetailScreen from './pages/ProductDetailScreen';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


const Stack= createStackNavigator()
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="start">
            <Stack.Screen name="start" component={StartScreen}/>
            <Stack.Screen name="products" component={ProductScreen}/>
            <Stack.Screen name="productDetail" component={ProductDetailScreen}/>
            {/* <Stack.Screen name="dashboard" component={DashboardScreen}/> */}
        </Stack.Navigator>
    </NavigationContainer>
  );
}

