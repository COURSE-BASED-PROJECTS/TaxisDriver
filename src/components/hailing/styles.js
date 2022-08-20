import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../styles/Colors";

const styles = StyleSheet.create({
    hailingPopup: {
        width: Dimensions.get("window").width * 0.9,
        height: "auto",
        backgroundColor: Colors.bg_primary,
        position: "absolute",
        bottom: Dimensions.get("window").height * 0.03,
        alignSelf: "center",
        elevation: 7,
        borderRadius: 10,
    },
    hailingPopupHeader: {
        padding: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    basicHailingPopup: {
        flexDirection: "row",
        marginTop: 5,
    },
    ava: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
    hailingPopupContent: {
        marginLeft: 10,
    },
    name: {
        fontSize: 18,
    },
    pay: {
        fontWeight: "300",
        marginTop: 2,
    },
    priceHailingPopup: {
        marginTop: 3,
    },
    direction: {
        fontWeight: "300",
        fontSize: 16,
        textAlign: "right",
    },
    price: {
        fontWeight: "500",
        marginTop: 2,
        fontSize: 20,
    },
    infoHailing: {
        padding: 16,
        flexDirection: 'row',
        flexShrink: 1
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
    startInfo: {
        flexShrink: 1,
        maxWidth: "96%"
    },
    separator: {
        width: Dimensions.get("window").width * 0.65,
        height: 2,
        backgroundColor: '#d5d5d5',
        marginVertical: 15
    },
    destinationInfo: {
        flexShrink: 1,
        maxWidth: "96%"
    },
    title:{
        color: '#cfcfcf',
        fontSize: 16
    },
    content:{
        fontSize: 20
    },
    chooseOption:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 15
    },
    button:{
        width: Dimensions.get("window").width * 0.38,
        height: 50,
        backgroundColor: Colors.secondary_light,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: Colors.secondary_light,
        borderWidth: 4, 
    },
    textButton:{
        fontSize: 18,
        fontWeight: '500'
    }
});

export default styles;
