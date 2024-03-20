import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/Welcome/index';
import SingIn from '../pages/Singin/index';
import Register from '../pages/Register/index';
import HomePage from '../pages/HomePage/index';
import Carrinho from '../pages/Carrinho/index';
import Configuracao from '../pages/Configuracao';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />


            <Stack.Screen
                name="SingIn"
                component={SingIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Carrinho"
                component={Carrinho}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Configuracao"
                component={Configuracao}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
}