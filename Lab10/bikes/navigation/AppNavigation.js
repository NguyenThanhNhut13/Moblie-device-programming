import { StartScreen } from "../pages/StartScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { ProductScreen } from "../pages/ProductScreen";
const Stack= createStackNavigator()
const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="start">
                <Stack.Screen name="start" component={StartScreen}/>
                <Stack.Screen name="products" component={ProductScreen}/>
                {/* <Stack.Screen name="productDetail" component={ProductDetailScreen}/>
                <Stack.Screen name="dashboard" component={DashboardScreen}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;