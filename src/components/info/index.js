import { View, Text, Image } from "react-native";
import styles from "./styles";

import { accountSelector } from "../../store/selector";
import { useSelector } from "react-redux";

import NumberFormat from "react-number-format";

const ratingHistory = [
    {
        image: require("../../../assets/icons/check-mark.png"),
        content: "20%",
        title: "Accepted",
    },
    {
        image: require("../../../assets/icons/rate.png"),
        content: "4.0",
        title: "Rating",
    },
    {
        image: require("../../../assets/icons/cancel.png"),
        content: "2%",
        title: "Cancel",
    },
];

function Info() {
    const { userInfo } = useSelector(accountSelector);

    return (
        <View style={styles.info}>
            <View style={styles.infoHeader}>
                <View style={styles.basicInfo}>
                    <Image
                        style={styles.ava}
                        source={require("../../../assets/icons/gamer.png")}
                    />
                    <View style={styles.infoContent}>
                        <Text style={styles.name}>{userInfo?.name}</Text>
                        <Text style={styles.level}>
                            {userInfo?.ride_count ?? 0 < 100
                                ? "Hạng đồng"
                                : userInfo?.ride_count ?? 0 > 500
                                ? "Hạng kim cương"
                                : "Hạng bạc"}
                        </Text>
                    </View>
                </View>
                <View style={styles.balanceInfo}>
                    <Text style={styles.balanceTitle}>Thu nhập</Text>
                    <Text style={styles.balance}>
                        <NumberFormat
                            value={Math.round(userInfo?.balance ?? 0)}
                            displayType="text"
                            thousandSeparator
                            renderText={(value) => <Text>{value + "đ"}</Text>}
                        />
                    </Text>
                </View>
            </View>
            <View style={styles.infoRiding}>
                {ratingHistory.map((item, index) => {
                    return (
                        <View style={styles.ratingHistory} key={index}>
                            <Image
                                tintColor="#fff"
                                style={styles.logoRatingHistory}
                                source={item.image}
                            />
                            <Text style={styles.contentRatingHistory}>
                                {item.content}
                            </Text>
                            <Text style={styles.titleRatingHistory}>
                                {item.title}
                            </Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}

export default Info;
