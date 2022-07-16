import { StyleSheet } from 'react-native'
import Colors from '../../styles/Colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.bg_primary,
    },
    title:{
        fontSize: 36,
        margin: 20
    }
})

export default styles;