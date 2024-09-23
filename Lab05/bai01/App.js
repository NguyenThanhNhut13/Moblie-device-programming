import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailScreen from './component/ProductDetailScreen';
import ChooseProductColor from './component/ChooseProductColor';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductDetailScreen">
        <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} options={{headerShown: false}} />
        <Stack.Screen name="ChooseProductColor" component={ChooseProductColor} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}