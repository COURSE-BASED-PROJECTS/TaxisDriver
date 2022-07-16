// import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image, Text } from "react-native";
import Colors from "../styles/Colors";
import Home from "../screens/Home";
import History from "../screens/History";
import User from "../screens/User";

const Tab = createBottomTabNavigator();

function HomeStackScreen() {
    return (
        // <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    top: 10,
                                }}
                            >
                                <Image
                                    source={require("../../assets/icons/home.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                    tintColor={
                                        focused
                                            ? 'blue'
                                            : "#748c94"
                                    }
                                ></Image>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: focused
                                            ? 'blue'
                                            : "#748c94",
                                    }}
                                >
                                    Trang chủ
                                </Text>
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="History"
                    component={History}
                    options={{
                        title: "",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    top: 10,
                                }}
                            >
                                <Image
                                    source={require("../../assets/icons/history.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                    tintColor={
                                        focused
                                            ? 'blue'
                                            : "#748c94"
                                    }
                                ></Image>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: focused
                                            ? 'blue'
                                            : "#748c94",
                                    }}
                                >
                                    Lịch sử
                                </Text>
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="User"
                    component={User}
                    options={{
                        title: "",
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    top: 10,
                                }}
                            >
                                <Image
                                    source={require("../../assets/icons/user.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                    tintColor={
                                        focused
                                            ? 'blue'
                                            : "#748c94"
                                    }
                                ></Image>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: focused
                                            ? 'blue'
                                            : "#748c94",
                                    }}
                                >
                                    Tài khoản
                                </Text>
                            </View>
                        ),
                    }}
                />
            </Tab.Navigator>
        // </NavigationContainer>
    );
}

export default HomeStackScreen;
