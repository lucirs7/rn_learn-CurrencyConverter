import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 25}}>
        <Text style={{fontSize: 25, color: 'white'}}>Test!</Text>
        <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(100, 100, 275)',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
