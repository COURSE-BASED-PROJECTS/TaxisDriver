import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

import { setPackageHailing } from "../../store/reducer/statusPackageSlice";

import { setMode } from "../../store/reducer/statusDriverMode";
import { useDispatch, useSelector } from "react-redux";
import { statusPackageSelector } from "../../store/selector";

import NumberFormat from "react-number-format";

function FinishHailing({ stompClient }) {
    const dispatch = useDispatch();

    const { packageHailing } = useSelector(statusPackageSelector);

    const handleFinishHailing = () => {
        stompClient.send(
            "/app/broadcast.handleRequest",
            {},
            JSON.stringify({ ...packageHailing, status: "end" })
        );
        dispatch(setPackageHailing({ ...packageHailing, status: "end" }));
        dispatch(setMode("ready"));
    };

    return (
        <View style={styles.hailingPopup}>
            <View style={styles.hailingPopupHeader}>
                <View style={styles.basicHailingPopup}>
                    <Image
                        style={styles.ava}
                        source={require("../../../assets/icons/gamer.png")}
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
                        <NumberFormat
                            value={Math.round(
                                packageHailing?.hailing?.cost ?? 0
                            )}
                            displayType="text"
                            thousandSeparator
                            renderText={(value) => <Text>{value + "đ"}</Text>}
                        />
                    </Text>
                    <Text style={styles.direction}>
                        {Math.round(
                            (packageHailing?.hailing?.distance / 1000) * 100
                        ) / 100}
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
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleFinishHailing}
                >
                    <Text style={styles.textButton}>Hoàn thành chuyến đi</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default FinishHailing;
