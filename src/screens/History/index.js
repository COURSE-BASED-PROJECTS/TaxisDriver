import { View, Text, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import HistoryComponent from "../../components/history";

const fakeData = [{ history: 1 }, { history: 1 }, { history: 1 }];

function History() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={{ width: "100%", marginTop: 10, height: "100%" }}
                data={fakeData}
                renderItem={() => {
                    return <HistoryComponent />;
                }}
            />
        </SafeAreaView>
    );
}

export default History;
