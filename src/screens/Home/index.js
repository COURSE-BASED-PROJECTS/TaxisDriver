import { useState } from "react";
import { View, Text, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

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
            <View style={styles.info}></View>
        </SafeAreaView>
    );
}

export default Home;
