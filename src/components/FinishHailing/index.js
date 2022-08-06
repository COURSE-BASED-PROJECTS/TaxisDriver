import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

function FinishHailing() {
    return (
        <View style={styles.hailingPopup}>
            <View style={styles.hailingPopupHeader}>
                <View style={styles.basicHailingPopup}>
                    <Image
                        style={styles.ava}
                        source={require("../../../assets/icons/ava.png")}
                    />
                    <View style={styles.hailingPopupContent}>
                        <Text style={styles.name}>Nguyễn Đức Huy</Text>
                        <Text style={styles.pay}>Tiền mặt</Text>
                    </View>
                </View>
                <View style={styles.priceHailingPopup}>
                    <Text style={styles.price}>20,000đ</Text>
                    <Text style={styles.direction}>2.3km</Text>
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
                        <Text style={styles.content}>123 Nguyễn Văn Cừ</Text>
                    </View>
                    <View style={styles.separator}></View>
                    <View style={styles.destinationInfo}>
                        <Text style={styles.title}>Điểm đến</Text>
                        <Text style={styles.content}>456 Nguyễn Văn Cừ</Text>
                    </View>
                </View>
            </View>

            <View style={styles.chooseOption}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Hoàn thành chuyến đi</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default FinishHailing;
