import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Categoria from "../screens/categoria/Categoria";
import Home from "../screens/home/Home";
import Produto from "../screens/produto/Produto";


const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Categoria" component={Categoria} />
                <Stack.Screen name="Produto" component={Produto} />

            </Stack.Navigator>
        </NavigationContainer>



    )
}
