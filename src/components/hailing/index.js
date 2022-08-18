import { View, Text, Image, TouchableOpacity, BackHandler } from "react-native";
import styles from "./styles";

import { statusPackageSelector } from "../../store/selector";
import { setMode } from "../../store/reducer/statusDriverMode";
import { useDispatch, useSelector } from "react-redux";

function HailingPopup({ stompClient }) {
    const dispatch = useDispatch();
    const { packageHailing } = useSelector(statusPackageSelector);

    const handleDecline = () => {
        stompClient.send(
            "/app/broadcast.handleRequest",
            {},
            JSON.stringify({ packageHailing, status: "decline" })
        );
        dispatch(setMode("ready"));
    };

    const handleAccept = () => {
        stompClient.send(
            "/app/broadcast.handleRequest",
            {},
            JSON.stringify({ packageHailing, status: "accept" })
        );
        dispatch(setMode("onFinish"));
    };

    return (
        <View style={styles.hailingPopup}>
            <View style={styles.hailingPopupHeader}>
                <View style={styles.basicHailingPopup}>
                    <Image
                        style={styles.ava}
                        source={require("../../../assets/icons/ava.png")}
                    />
                    <View style={styles.hailingPopupContent}>
                        <Text style={styles.name}>
                            {packageHailing?.idClient}
                        </Text>
                        <Text style={styles.pay}>Tiền mặt</Text>
                    </View>
                </View>
                <View style={styles.priceHailingPopup}>
                    <Text style={styles.price}>
                        {packageHailing?.hailing?.cost}đ
                    </Text>
                    <Text style={styles.direction}>
                        {Math.round(packageHailing?.hailing?.distance * 100) /
                            100}
                        km
                    </Text>
                </View>
            </View>

            <View style={styles.infoHailing}>
                <View style={styles.startToDestination}>
                    <Image
                        style={styles.point}
                        source={require("../../../assets/icons/points.png")}
                    />
                    <View style={styles.linkLine}></View>
                    <Image
                        style={styles.location}
                        source={require("../../../assets/icons/location.png")}
                    />
                </View>
                <View style={styles.infoContent}>
                    <View style={styles.startInfo}>
                        <Text style={styles.title}>Điểm đón</Text>
                        <Text style={styles.content}>
                            {packageHailing?.hailing?.locationStart?.name}
                        </Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.destinationInfo}>
                        <Text style={styles.title}>Điểm đến</Text>
                        <Text style={styles.content}>
                            {packageHailing?.hailing?.locationEnd?.name}
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.chooseOption}>
                <TouchableOpacity style={styles.button} onPress={handleAccept}>
                    <Text style={styles.textButton}>Chấp nhận</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: "#fff" }]}
                    onPress={handleDecline}
                >
                    <Text style={styles.textButton}>Từ chối</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default HailingPopup;
