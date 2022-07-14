import { StyleSheet, Dimensions} from 'react-native'
import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
    info:{
        width: Dimensions.get('window').width*0.9,
        height: Dimensions.get('window').height*0.35,
        backgroundColor: Colors.bg_primary,
        position: 'absolute',
        bottom: Dimensions.get('window').height*0.03,
        alignSelf: 'center',
        elevation: 7,
        borderRadius: 10
    },
    infoHeader:{
        padding: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    basicInfo:{
        flexDirection: 'row',
        marginTop: 5
    },
    ava:{
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    infoContent:{
        marginLeft: 10,
    },
    name:{
        fontSize: 18
    },
    level:{
        fontWeight: '300',
        marginTop: 2
    },
    balanceInfo:{
        marginTop: 5
    },
    balanceTitle:{
        fontWeight: '300',
        fontSize: 18,
        textAlign: 'right',
    },
    balance:{
        fontWeight: '500',
        marginTop: 2
    },
    infoRiding:{
        backgroundColor: '#303133',
        width: '90%',
        height: '60%',
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    ratingHistory:{
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
    },
    logoRatingHistory:{
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    contentRatingHistory:{
        color: Colors.bg_primary,
        fontSize: 20,
        marginTop: 8
    },
    titleRatingHistory:{
        color: Colors.bg_primary,
        fontWeight: '300'
    }
})

export default styles;