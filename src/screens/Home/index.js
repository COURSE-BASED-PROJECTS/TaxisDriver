import { useEffect, useRef, useState } from "react";
import { View, Text, Switch, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

import Info from "../../components/info";
import HailingPopup from "../../components/hailing";
import FinishHailing from "../../components/FinishHailing";

import SockJS from "sockjs-client"; // Note this line
import Stomp from "stompjs";
import * as Location from "expo-location";
import configTime from "../../config/configTimeInterval";

import { socketServer } from "../../service/api";
import { packageGPS } from "../../utils/packageSend";

import { useDispatch, useSelector } from "react-redux";

import { setPackageHailing } from "../../store/reducer/statusPackageSlice";
import { setMode } from "../../store/reducer/statusDriverMode";
import { statusDriverModeSelector } from "../../store/selector";

let stompClient = null;

function Home() {
    const [switchRidingMode, setSwitchRidingMode] = useState(false);
    const [intervalID, setIntervalID] = useState(null);
    const [position, setPosition] = useState({});

    const { mode } = useSelector(statusDriverModeSelector);
    const dispatch = useDispatch();

    const handleSwitch = () => {
        setSwitchRidingMode((state) => !state);
    };

    useEffect(() => {
        const getLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("Permission to access location was denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            const pos = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            };

            setPosition(pos);
        };

        setIntervalID(getLocation, configTime.getGPS);
    }, []);

    useEffect(() => {
        const socket = new SockJS(socketServer);
        stompClient = Stomp.over(socket);

        stompClient.connect({}, onConnected, onError);

        return () => stompClient && stompClient.disconnect();
    }, []);

    useEffect(() => {
        if (intervalID) clearInterval(intervalID);

        if (switchRidingMode === true) {
            const id = setInterval(() => {
                // Tell your username to the server

                if (position?.latitude && position?.longitude) {
                    stompClient.send(
                        "/app/gps.getGps",
                        {},
                        packageGPS("1234", "45567", position, "GPS")
                    );
                }
            }, configTime.sendingGPS);

            setIntervalID(id);
        }
    }, [switchRidingMode]);

    const onConnected = () => {
        console.log("onConnected");
        // Subscribe to the Public Topic
        stompClient.subscribe("/topic/public", onMessageReceived);
        stompClient.subscribe("/topic/123", onMessageReceivedPrivate);

        const packageHailing = {
            idHailing: "123",
            idDriver: "driver",
            idClient: "client",
            hailing: {
                locationStart: {
                    latitude: 0,
                    longitude: 0,
                    name: "start",
                },
                locationEnd: {
                    latitude: 0,
                    longitude: 0,
                    name: "end",
                },
                distance: 0,
                carType: 2,
                cost: 23000,
                timeDuring: 0,
                timeStart: new Date(
                    Date.now() - new Date().getTimezoneOffset() * 60000
                )
                    .toISOString()
                    .slice(0, -1),
            },
            status: "",
            scope: [],
        };

        stompClient.send(
            "/app/order.getOrder",
            {},
            JSON.stringify(packageHailing)
        );
    };

    const onError = (error) => {
        console.log(error);
    };

    const onMessageReceivedPrivate = (payload) => {
        const message = JSON.parse(payload.body);

        if (message.status === "waiting") {
            if (!switchRidingMode) {
                stompClient.send(
                    "/app/broadcast.handleRequest",
                    {},
                    JSON.stringify({ ...message, status: "decline" })
                );
                return;
            }
            if (mode === "ready") {
                dispatch(setPackageHailing(message));
                dispatch(setMode("option"));
            } else {
                stompClient.send(
                    "/app/broadcast.handleRequest",
                    {},
                    JSON.stringify({ ...message, status: "decline" })
                );
            }
        }
    };

    const onMessageReceived = (payload) => {
        console.log("onMessageReceived");
        const message = JSON.parse(payload.body);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.status}>
                    {switchRidingMode ? "Đang hoạt động" : "Ngừng hoạt động"}
                </Text>
                {/* Switch */}
                <Switch
                    style={styles.switchButton}
                    onValueChange={handleSwitch}
                    value={switchRidingMode}
                />
            </View>
            <View style={styles.contentMap}></View>

            {mode === "ready" && <Info />}
            {mode === "option" && <HailingPopup stompClient={stompClient} />}
            {mode === "onFinish" && <FinishHailing stompClient={stompClient} />}
        </SafeAreaView>
    );
}

export default Home;
