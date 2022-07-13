import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles'

function History() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>History</Text>
    </SafeAreaView>
  )
}

export default History;