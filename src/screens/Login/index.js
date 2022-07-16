import {
    Text,
    Image,
    View,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import FormElement from "../../components/FormElement";

function Login({ navigation }) {
    const handleSubmit = () => {
        // authentication
        // navigation.navigate("HomeStack");
        navigation.reset({
            index: 0,
            routes: [{ name: "HomeStackScreen" }],
        });
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
                    />

                    <FormElement
                        title={"Nhập mật khẩu"}
                        placeholder={"Nhập mật khẩu"}
                        secureTextEntry={true}
                    />
                </ScrollView>
            </KeyboardAvoidingView>

            <View style={styles.button}>
                <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
                    <Text style={styles.buttonTitle}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Login;
