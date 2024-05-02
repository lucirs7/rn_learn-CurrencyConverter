import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041
}

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState(0.0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenView}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>{resultValue}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            selectionColor={'rgb(175, 15, 105)'}
            keyboardType='numeric'
            placeholder='Enter a value...'
            placeholderTextColor={'rgba(175, 15, 105, 0.5)'}
            value={inputValue}
            onChangeText={inputValue => {setInputValue(inputValue)}}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.converterButton}>
            <Text style={styles.converterButtonText}>$</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(200, 115, 205, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenView: {
    marginTop: 25,
    flex: 1,
    flexDirection: 'column',
  },
  resultContainer: {
    height: 70,
    width: 325,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgb(250, 115, 205)',
    backgroundColor: 'rgb(250, 115, 205)',
    borderRadius: 10,
  },
  resultValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#eeeeee',
  },
  inputContainer: {
    height: 70,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgb(250, 115, 205)',
    borderRadius: 10,

  },
  input: {
    color: 'rgb(175, 15, 105)',
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    borderColor: 'rgb(175, 15, 105)',
    borderWidth: 2,
    borderRadius: 10,
  },
  converterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(175, 15, 105)',
    height: 100,
    width: '33.3%',
    borderWidth: 2,
    borderColor: 'rgb(175, 15, 105)',
  },
  converterButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#eeeeee'
  }
});
