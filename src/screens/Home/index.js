import { useState } from "react";
import { View, Text, Switch, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Info from "../../components/info";
import HailingPopup from "../../components/hailing";

function Home() {
    const [switchRidingMode, setSwitchRidingMode] = useState(false);
    const handleSwitch = () => {
        setSwitchRidingMode((state) => !state);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.status}>Đang hoạt động</Text>
                {/* Switch */}
                <Switch
                    style={styles.switchButton}
                    onValueChange={handleSwitch}
                    value={switchRidingMode}
                />
            </View>
            <View style={styles.contentMap}></View>
            {/* <Info/> */}

            <HailingPopup/>
        </SafeAreaView>
    );
}

export default Home;
