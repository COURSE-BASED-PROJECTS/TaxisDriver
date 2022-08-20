import { useEffect, useRef, useState } from "react";
import { View, Text, Switch, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

import Info from "../../components/info";
import HailingPopup from "../../components/hailing";
import FinishHailing from "../../components/FinishHailing";

import MapView, { Marker } from "react-native-maps";
// import MapViewDirections from "react-native-maps-directions";

import uuid from "react-native-uuid";

import SockJS from "sockjs-client"; // Note this line
import Stomp from "stompjs";
import * as Location from "expo-location";
import configTime from "../../config/configTimeInterval";

import { socketServer } from "../../service/api";
import { packageGPS } from "../../utils/packageSend";

import { useDispatch, useSelector } from "react-redux";

import { setPackageHailing } from "../../store/reducer/statusPackageSlice";
import { setMode } from "../../store/reducer/statusDriverMode";
import {
    statusDriverModeSelector,
    accountSelector,
} from "../../store/selector";

let stompClient = null;

function Home() {
    const [switchRidingMode, setSwitchRidingMode] = useState(false);
    const [intervalID, setIntervalID] = useState(null);
    const [position, setPosition] = useState({});

    const { mode } = useSelector(statusDriverModeSelector);
    const { userInfo } = useSelector(accountSelector);
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
                        packageGPS("1234", userInfo?.id, position, "GPS")
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
        stompClient.subscribe(
            "/topic/" + userInfo?.id,
            onMessageReceivedPrivate
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
            <View style={styles.contentMap}>
                <MapView
                    style={styles.currentMapView}
                    region={{
                        latitude: position?.latitude ?? 10.7628356,
                        longitude: position?.longitude ?? 106.680293,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}
                    showsUserLocation={true}
                    showsTraffic={true}
                    userLocationUpdateInterval={5000}
                    zoomEnabled={true}
                >
                    {/* <MapViewDirections
                    origin={{ latitude: start?.latitude ?? 0, longitude: start?.longitude ?? 0 }}
                    destination={{
                        latitude: 37.771707,
                        longitude: -122.4053769,
                    }}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="black"
                /> */}

                    <Marker
                        coordinate={{
                            latitude: position?.latitude ?? 10.7628356,
                            longitude: position?.longitude ?? 106.680293,
                        }}
                    >
                        <Image
                            source={{
                                uri: "https://cdn-icons.flaticon.com/png/512/1048/premium/1048313.png?token=exp=1660878537~hmac=aae77f090c58c0275d1b5c9c2114363d",
                            }}
                            style={{ height: 50, width: 50 }}
                        />
                    </Marker>
                </MapView>
            </View>

            {mode === "ready" && <Info />}
            {mode === "option" && <HailingPopup stompClient={stompClient} />}
            {mode === "onFinish" && <FinishHailing stompClient={stompClient} />}
        </SafeAreaView>
    );
}

export default Home;
