import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../styles/Colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg_primary,
    },
    header:{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    status: {
        fontSize: 30,
    },
    switchButton:{
        position: 'absolute',
        right: 15,
        top: 0.3,
    },
    contentMap:{
        backgroundColor: Colors.bg_primary,
        position: 'absolute',
        left: 0,
        right: 0,
        top: Dimensions.get('window').height*0.2,
        bottom: 0,
    },
    info:{
        width: Dimensions.get('window').width*0.85,
        height: Dimensions.get('window').height*0.4,
        backgroundColor: Colors.secondary_light,
        position: 'absolute',
        bottom: Dimensions.get('window').height*0.03,
        alignSelf: 'center',
        elevation: 10
    }
})

export default styles;