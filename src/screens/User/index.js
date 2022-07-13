import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles'

function User() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>User</Text>
    </SafeAreaView>
  )
}

export default User;