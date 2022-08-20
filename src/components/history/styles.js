import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../styles/Colors";

const styles = StyleSheet.create({
    historyPopup: {
        marginTop: 25,
        width: Dimensions.get("window").width * 0.9,
        height: 'auto',
        backgroundColor: Colors.bg_primary,
        bottom: Dimensions.get("window").height * 0.03,
        alignSelf: "center",
        elevation: 7,
        borderRadius: 10,
    },
    historyPopupHeader: {
        padding: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    basicHistoryPopup: {
        flexDirection: "row",
        marginTop: 5,
    },
    ava: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
    historyPopupContent: {
        marginLeft: 10,
    },
    name: {
        fontSize: 18,
    },
    pay: {
        fontWeight: "300",
        marginTop: 2,
    },
    priceHistoryPopup: {
        marginTop: 3,
        maxWidth: "30%"
    },
    time: {
        fontWeight: "300",
        fontSize: 16,
        textAlign: "right",
    },
    price: {
        fontWeight: "500",
        marginTop: 2,
        fontSize: 20,
    },
    infoHistory: {
        padding: 16,
        flexDirection: 'row'
    },
    startToDestination: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    point: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    linkLine: {
        width: 4,
        height: 70,
        backgroundColor: '#d5d5d5'
    },
    location: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginTop: 2
    },
    infoContent: {
        display: 'flex',
        justifyContent: 'space-around',
        marginLeft: 15
    },
    startInfo: {},
    separator: {
        width: Dimensions.get("window").width * 0.65,
        height: 2,
        backgroundColor: '#d5d5d5',
        marginVertical: 15
    },
    destinationInfo: {},
    title:{
        color: '#cfcfcf',
        fontSize: 16
    },
    content:{
        fontSize: 20,
        maxWidth: "90%"
    },
    
});

export default styles;
