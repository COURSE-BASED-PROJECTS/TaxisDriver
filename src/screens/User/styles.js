import { Dimensions, StyleSheet } from 'react-native'
import Colors from '../../styles/Colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg_primary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header:{
        padding: 10,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    headerTitle:{
        fontSize: 26,
        alignSelf: 'center'
    },
    logout:{
        width: 30,
        height: 30,
        resizeMode: 'contain',
        position: 'absolute',
        right: -0.2*Dimensions.get('window').width,
        top: '-40%'
    }
})

export default styles;