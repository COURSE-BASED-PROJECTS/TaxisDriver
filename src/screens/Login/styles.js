import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg_primary,
    },
    button: {
        flex: 1,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginVertical: 40,

        flexDirection: "row",

    },
    imgBackground: {
        flex: 8,
        resizeMode: "contain",
    },
    formContent: {
        flex: 3,
    },
    buttonContainer: {
        width: 150,
        height: 50,
        backgroundColor: Colors.secondary_medium,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 7
    },
    buttonTitle:{
        fontSize: 18,
        color: Colors.bg_primary
    }
});

export default styles;
