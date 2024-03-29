import {
    Text,
    Image,
    View,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

import FormElement from "../../components/FormElement";

import { useSelector, useDispatch } from "react-redux";
import { accountSelector } from "../../store/selector";
import {
    setUsername,
    setPassword,
    setUserInfo,
} from "../../store/reducer/accountSlice";

import axios from "axios";
import { loginAPI, driverInfoAPI } from "../../service/api";

function Login({ navigation }) {
    const dispatch = useDispatch();
    const { username, password } = useSelector(accountSelector);

    const handleSubmit = async () => {
        // navigation.reset({
        //     index: 0,
        //     routes: [{ name: "HomeStackScreen" }],
        // });
        if (username !== "" && password !== "") {
            axios
                .post(loginAPI, {
                    username,
                    password,
                })
                .then(function (response) {
                    const userInfo = response.data;
                    console.log(userInfo);
                    dispatch(setUserInfo(userInfo));

                    if (userInfo !== null && response.status === 200) {
                        axios
                            .get(driverInfoAPI + userInfo.phoneNumber)
                            .then(function (res) {
                                const driverInfo = res.data;
                                console.log(driverInfo);
                                // handle success
                                if (driverInfo !== null && res.status === 200) {
                                    dispatch(setUserInfo(driverInfo));

                                    navigation.reset({
                                        index: 0,
                                        routes: [{ name: "HomeStackScreen" }],
                                    });
                                }
                            })
                            .catch(function (error) {
                                // handle error
                                console.log(error);
                                alert("Đăng nhập thất bại")
                            })
                            .then(function () {
                                // always executed
                            });
                    }
                })
                .catch(function (error) {
                    alert("Tên tài khoản hoặc mật khẩu sai");
                    dispatch(setUsername(""));
                    dispatch(setPassword(""));
                    console.log(error);
                });
        }
    };

    const moveToRegister = () => {
        navigation.navigate("Register");
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.imgBackground}
                source={{
                    uri: "https://img.freepik.com/free-vector/city-driver-concept-illustration_114360-2648.jpg?w=2000",
                }}
            />

            <KeyboardAvoidingView
                style={styles.formContent}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                enabled={false}
            >
                <ScrollView>
                    <FormElement
                        title={"Tên tài khoản / SĐT"}
                        placeholder={"Nhập tên tài khoản / SĐT"}
                        text="_username_"
                    />

                    <FormElement
                        title={"Nhập mật khẩu"}
                        placeholder={"Nhập mật khẩu"}
                        secureTextEntry={true}
                    />
                </ScrollView>
            </KeyboardAvoidingView>

            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={handleSubmit}
                >
                    <Text style={styles.buttonTitle}>Đăng nhập</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={moveToRegister}
                >
                    <Text style={styles.buttonTitle}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Login;
