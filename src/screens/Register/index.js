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

import { useEffect } from "react";

import { accountSelector } from "../../store/selector";
import { useSelector, useDispatch } from "react-redux";
import { setRegisterInfo } from "../../store/reducer/accountSlice";

import { registerAPI } from "../../service/api";

import axios from "axios";

function RegisterScreen({ navigation }) {
    const dispatch = useDispatch();

    const { registerInfo } = useSelector(accountSelector);

    const handleSubmit = () => {
        console.log(registerInfo);

        if (
            registerInfo.phoneNumber &&
            registerInfo.password &&
            registerInfo.name &&
            registerInfo.address
        ) {
            axios
                .post(registerAPI, {
                    ...registerInfo,
                    role: "DRIVER",
                    avatar: "",
                    isLocked: false,
                    username: registerInfo?.phoneNumber,
                })
                .then(function (response) {
                    console.log(response.data);

                    if (response.status === 200) {
                        dispatch(setRegisterInfo({}));

                        navigation.reset({
                            index: 0,
                            routes: [{ name: "Login" }],
                        });
                    } 
                })
                .catch(function (error) {
                    console.log(error);
                    alert("Tài khoản đã tồn tại");
                });
        } else {
            alert("Nhập đầy đủ thông tin đăng ký");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.imgBackground}
                source={{
                    uri: "https://img.freepik.com/free-vector/city-driver-concept-illustration_114360-2648.jpg?w=2000",
                }}
            />
            <View style={styles.header}>
                <Text style={styles.title}>Đăng ký tài khoản </Text>
                <View style={styles.breakLine}></View>
            </View>

            <KeyboardAvoidingView
                style={styles.formContent}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                enabled={false}
            >
                <ScrollView>
                    {/* <FormElement
                        title={"Tên đăng nhập"}
                        placeholder={"Nhập tên đăng nhập"}
                        type="register"
                        register="username"
                    /> */}

                    <FormElement
                        title={"SĐT"}
                        placeholder={"Nhập số điện thoại"}
                        keyboardType={"numeric"}
                        type="register"
                        register="phoneNumber"
                    />

                    <FormElement
                        title={"Mật khẩu"}
                        placeholder={"Nhập mật khẩu"}
                        secureTextEntry={true}
                        type="register"
                        register="password"
                    />

                    <FormElement
                        title={"Họ và tên"}
                        placeholder={"Nhập họ tên"}
                        type="register"
                        register="name"
                    />

                    <FormElement
                        title={"Địa chỉ nhà"}
                        placeholder={"Nhập địa chỉ nhà"}
                        type="register"
                        register="address"
                    />
                </ScrollView>
            </KeyboardAvoidingView>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={{ color: "white" }}>Đăng ký</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default RegisterScreen;
