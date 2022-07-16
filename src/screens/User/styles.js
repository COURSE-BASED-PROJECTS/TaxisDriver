import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../styles/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg_primary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        padding: 10,
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -50
    },
    headerTitle: {
        fontSize: 26,
        alignSelf: "center",
    },
    logout: {
        width: 30,
        height: 30,
        resizeMode: "contain",
        position: "absolute",
        right: -0.2 * Dimensions.get("window").width,
        top: "-40%",
    },
    info: {
        marginTop: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    ava: {
        width: 120,
        height: 120,
        resizeMode: "contain",
    },
    name: {
        fontSize: 25,
        marginTop: 15,
        fontWeight: "600",
    },
    separator: {
        width: Dimensions.get("window").width * 0.85,
        height: 1,
        backgroundColor: "#d5d5d5",
        alignSelf: "center",
        marginTop: 30,
    },
    historyRiding: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: Dimensions.get("window").width * 0.85,
        alignSelf: "center",
        marginTop: 10
    },
    rideInfo: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    car: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    rideInfoContent: {
        marginLeft: 10
    },
    idCar: {
        fontSize: 16,
        fontWeight: '500'
    },
    nameCar: {},
    rideCount: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    count: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    rideCountContent: {
        marginLeft: 10
    },
    rideCountTitle: {
        fontSize: 16,
        fontWeight: '500'
    },
    income:{
        width: Dimensions.get('window').width*0.85,
        height: 200,
        alignSelf: 'center',
        marginTop: 40,
        elevation: 10,
        borderRadius: 10,
        backgroundColor: Colors.secondary_light,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    incomeTitle:{
        fontSize: 16,
        color: '#bac2ca'
    },
    incomeContent:{
        fontSize: 36,
        fontWeight: '700'
    },
    withdraw:{
        flexDirection: 'row',
        position: 'absolute',
        top: 15,
        right: 20,
    },
    withdrawTitle:{
        color: Colors.secondary_medium
    },
    rightIcon:{
        width: 20,
        height: 20,
        marginLeft: 5
    }

});

export default styles;
