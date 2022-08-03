import { useEffect, useRef, useState } from "react";
import { View, Text, Switch, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

import Info from "../../components/info";
import HailingPopup from "../../components/hailing";

import SockJS from "sockjs-client"; // Note this line
import Stomp from "stompjs";

let stompClient = null;

function Home() {
    const [switchRidingMode, setSwitchRidingMode] = useState(false);
    const [intervalID, setIntervalID] = useState(null);

    const handleSwitch = () => {
        setSwitchRidingMode((state) => !state);
    };

    useEffect(() => {
        const socket = new SockJS("http://10.0.2.2:8080/ws");
        stompClient = Stomp.over(socket);

        stompClient.connect({}, onConnected, onError);

        return () => stompClient && stompClient.disconnect();
    }, []);

    useEffect(() => {
        if (intervalID) clearInterval(intervalID);

        if (switchRidingMode === true) {
            const id = setInterval(() => {
                // Tell your username to the server
                stompClient.send(
                    "/app/chat.sendMessage",
                    {},
                    JSON.stringify({
                        sender: "huy",
                        content: "2",
                        type: "CHAT",
                    })
                );
            }, 2000);

            setIntervalID(id);
        }
    }, [switchRidingMode]);

    const onConnected = () => {
        console.log("onConnected");
        // Subscribe to the Public Topic
        stompClient.subscribe("/topic/public", onMessageReceived);
    };

    const onError = (error) => {
        console.log(error);
    };

    const onMessageReceived = (payload) => {
        console.log("onMessageReceived");
        const message = JSON.parse(payload.body);
        console.log(message);
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

            <HailingPopup />
        </SafeAreaView>
    );
}

export default Home;
