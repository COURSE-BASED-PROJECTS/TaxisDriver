import { View, Text, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import HistoryComponent from "../../components/history";

import { useState, useEffect } from "react";
import { accountSelector } from "../../store/selector";
import { useSelector } from "react-redux";

import { historyAPI } from "../../service/api";
import axios from "axios";

const fakeData = [{ history: 1 }, { history: 1 }, { history: 1 }];

function History() {
    const [histories, setHistories] = useState([]);
    const { userInfo } = useSelector(accountSelector);
    

    useEffect(() => {
        if (userInfo?.id === "" || userInfo?.id === undefined) return;
        else {
            console.log(historyAPI + userInfo?.id);
            axios
                .get(historyAPI + userInfo?.id)
                .then(function (response) {
                    if (response.status === 200) {
                        setHistories(response.data);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        }
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Chuyến xe</Text>
            {histories.length > 0 ? (
                <FlatList
                    style={{ width: "100%", marginTop: 10, height: "100%" }}
                    data={histories}
                    renderItem={({ item }) => {
                        return <HistoryComponent history={item} />;
                    }}
                />
            ) : (
                <Text>Không có lịch sử chuyến xe</Text>
            )}
        </SafeAreaView>
    );
}

export default History;
