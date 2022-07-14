import { useState } from "react";
import { View, Text, Switch, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

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

function Home() {
    const [switchRidingMode, setSwitchRidingMode] = useState(false);
    const handleSwitch = () => {
        setSwitchRidingMode((state) => !state);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.status}>Online</Text>
                {/* Switch */}
                <Switch
                    style={styles.switchButton}
                    onValueChange={handleSwitch}
                    value={switchRidingMode}
                />
            </View>
            <View style={styles.contentMap}></View>
            <View style={styles.info}>
                <View style={styles.infoHeader}>
                    <View style={styles.basicInfo}>
                        <Image
                            style={styles.ava}
                            source={require("../../../assets/icons/ava.png")}
                        />
                        <View style={styles.infoContent}>
                            <Text style={styles.name}>Nguyễn Đức Huy</Text>
                            <Text style={styles.level}>Hạng bạc</Text>
                        </View>
                    </View>
                    <View style={styles.balanceInfo}>
                        <Text style={styles.balanceTitle}>Thu nhập</Text>
                        <Text style={styles.balance}>100,000,000đ</Text>
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
        </SafeAreaView>
    );
}

export default Home;
