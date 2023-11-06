import { createNativeStackNavigator }  from '@react-navigation/native-stack'
import Welcome, {} from '../pages/welcome'
import Signin, {} from '../pages/Signin'
import Signup, {} from '../pages/Signup';
import Home, {} from '../pages/Home';
import Cart, {} from '../pages/Cart';
import Pay from '../pages/Pay';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false}}
            />

            <Stack.Screen 
            name="Signin"
            component={Signin}
            options={{ headerShown: false}}
            />

            <Stack.Screen 
            name="Signup"
            component={Signup}
            options={{ headerShown: false}}
            />

            <Stack.Screen 
            name="Home"
            component={Home}
            options={{ headerShown: false}}
            />

            <Stack.Screen 
            name="Cart"
            component={Cart}
            options={{ headerShown: false}}
            />

            <Stack.Screen 
            name="Pay"
            component={Pay}
            options={{ headerShown: false}}
            />
                
            
        </Stack.Navigator>
    )
}