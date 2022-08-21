import HomeStackScreen from "./src/navigations/HomeStackScreen";
import Login from "./src/screens/Login";
import RegisterScreen from "./src/screens/Register";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {store} from "./src/store/store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="HomeStackScreen"
                        component={HomeStackScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={RegisterScreen}
                        options={{title: "Đăng ký"}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
