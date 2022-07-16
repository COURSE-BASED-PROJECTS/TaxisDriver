import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

function User() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ flex: 1, width: "100%", height: "100%" }}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Thông tin cá nhân</Text>

                    <TouchableOpacity>
                        <Image
                            style={styles.logout}
                            source={require("../../../assets/icons/log-out.png")}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.info}>
                  <Image style={styles.ava}/>
                  <Text style={styles.name}></Text>
                </View>
                <View style={styles.historyRiding}></View>
                <View style={styles.income}></View>
                <View style={styles.historyIncome}></View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default User;
