import { View, Text, Image, TouchableOpacity } from "react-native";
import Colors from "../../styles/Colors";
import styles from "./styles";

function History() {
    return (
        <View style={styles.historyPopup}>
            <View style={styles.infoHistory}>
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

            <View style={styles.historyPopupHeader}>
                <View style={styles.basicHistoryPopup}>
                    <Image
                        style={styles.ava}
                        source={require("../../../assets/icons/ava.png")}
                    />
                    <View style={styles.historyPopupContent}>
                        <Text style={styles.name}>Nguyễn Đức Huy</Text>
                        <Text style={styles.pay}>Tiền mặt</Text>
                    </View>
                </View>
                <View style={styles.priceHistoryPopup}>
                    <Text style={styles.price}>20,000đ</Text>
                    <Text style={styles.time}>5 phút</Text>
                </View>

            </View>
        </View>
    );
}

export default History;
