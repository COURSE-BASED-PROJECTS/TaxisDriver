import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Colors from "../../styles/Colors";

import { accountSelector } from "../../store/selector";
import {
    setUsername,
    setPassword,
    setUserInfo,
} from "../../store/reducer/accountSlice";
import { setPackageHailing } from "../../store/reducer/statusPackageSlice";
import { setMode } from "../../store/reducer/statusDriverMode";
import { useSelector, useDispatch } from "react-redux";
import { useIsFocused } from "@react-navigation/native";

import { driverInfoAPI } from "../../service/api";

import NumberFormat from "react-number-format";
import { useEffect } from "react";

import axios from "axios";

function User({ navigation }) {
    const { userInfo } = useSelector(accountSelector);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            axios
                .get(driverInfoAPI + userInfo?.phoneNumber)
                .then(function (res) {
                    const driverInfo = res.data;
                    // handle success
                    if (driverInfo !== null && res.status === 200) {
                        dispatch(setUserInfo(driverInfo));
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        }
    }, [isFocused]);

    const dispatch = useDispatch();

    const signOut = () => {
        console.log("out");
        dispatch(setUsername(""));
        dispatch(setPassword(""));
        dispatch(setUserInfo({}));
        dispatch(setPackageHailing(null));
        dispatch(setMode("ready"));

        navigation.navigate("Login");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Thông tin cá nhân</Text>

                <TouchableOpacity onPress={signOut}>
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
                <Text style={styles.name}>{userInfo?.name}</Text>
            </View>
            <View style={styles.separator}></View>

            <View style={styles.historyRiding}>
                <View style={styles.rideInfo}>
                    <Image
                        style={styles.car}
                        source={require("../../../assets/icons/car.png")}
                    />
                    <View style={styles.rideInfoContent}>
                        <Text style={styles.idCar}>
                            {userInfo?.plate ?? "XX-XXXX"}
                        </Text>
                        <Text style={styles.nameCar}>
                            {userInfo?.carName ?? "S450 Mercedes"}
                        </Text>
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
                        <Text style={styles.rideCount}>
                            {userInfo?.ride_count ?? 0}
                        </Text>
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
                <Text style={styles.incomeContent}>
                    <NumberFormat
                        value={Math.round(userInfo?.balance ?? 0)}
                        displayType="text"
                        thousandSeparator
                        renderText={(value) => <Text>{value + "đ"}</Text>}
                    />
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default User;
