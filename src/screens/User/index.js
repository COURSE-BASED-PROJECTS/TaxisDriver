import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Colors from "../../styles/Colors";

function User() {
    return (
        <SafeAreaView style={styles.container}>
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
                <Image
                    style={styles.ava}
                    source={require("../../../assets/icons/gamer.png")}
                />
                <Text style={styles.name}>Nguyen Duc Huy</Text>
            </View>
            <View style={styles.separator}></View>

            <View style={styles.historyRiding}>
                <View style={styles.rideInfo}>
                    <Image
                        style={styles.car}
                        source={require("../../../assets/icons/car.png")}
                    />
                    <View style={styles.rideInfoContent}>
                        <Text style={styles.idCar}>410-1238</Text>
                        <Text style={styles.nameCar}>Vinfast Lux 2.0</Text>
                    </View>
                </View>
                <View style={styles.rideCount}>
                    <Image
                        style={styles.count}
                        source={require("../../../assets/icons/direction.png")}
                    />
                    <View style={styles.rideCountContent}>
                        <Text style={styles.rideCountTitle}>
                            Tổng số chuyến
                        </Text>
                        <Text style={styles.rideCount}>50</Text>
                    </View>
                </View>
            </View>

            <View style={styles.income}>
                <TouchableOpacity style={styles.withdraw}>
                    <Text style={styles.withdrawTitle}>WITHWRAW</Text>
                    <Image
                        style={styles.rightIcon}
                        source={require("../../../assets/icons/right-arrow.png")}
                        tintColor={Colors.secondary_medium}
                    />
                </TouchableOpacity>
                <Text style={styles.incomeTitle}>Số dư tài khoản</Text>
                <Text style={styles.incomeContent}>50,000,000 đ</Text>
            </View>
        </SafeAreaView>
    );
}

export default User;
