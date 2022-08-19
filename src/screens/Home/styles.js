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
        justifyContent: 'center',
        marginTop: 10
    },
    status: {
        fontSize: 28,
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
        top: Dimensions.get('window').height*0.15,
        bottom: 0,
        backgroundColor: Colors.secondary_light
    },
    currentMapView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
    
})

export default styles;