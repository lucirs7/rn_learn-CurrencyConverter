import { useEffect, useState } from 'react';
import { Alert, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041
}

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState(0.0);

  const buttonPressed = (currency: string) => {
    if (inputValue === '') {
      Alert.alert('Enter a value, please.');
      return;
    }

    let result: number = 0;
    switch(currency) {
      case 'DOLLAR':
        result = Number.parseInt(inputValue) * currencyPerRupee[currency];
        break;
      case 'EURO':
        result = Number.parseInt(inputValue) * currencyPerRupee[currency];
        break;
      case 'POUND':
        result = Number.parseInt(inputValue) * currencyPerRupee[currency];
        break;
      case 'AUSDOLLAR':
        result = Number.parseInt(inputValue) * currencyPerRupee[currency];
        break;
      case 'CANDOLLAR':
        result = Number.parseInt(inputValue) * currencyPerRupee[currency];
        break;
      case 'YEN':
        result = Number.parseInt(inputValue) * currencyPerRupee[currency];
        break;
      case 'DINAR':
        result = Number.parseInt(inputValue) * currencyPerRupee[currency];
        break;
    }
    
    setResultValue(result);
  };

  useEffect(() => {
    if (inputValue === '') {
      setResultValue(0);
    }
  }, [inputValue]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.screenView}>
          <Text style={styles.mainText}>🤑 Convert your RUPEES (₹)</Text>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>{resultValue.toFixed(3)}</Text>
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
            <TouchableOpacity
                style={styles.converterButton}
                onPress={() => buttonPressed('DOLLAR')}
              >
                <Text style={styles.converterButtonText}>🇺🇸 Dollars ($)</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.converterButton}
                onPress={() => buttonPressed('EURO')}
              >
                <Text style={styles.converterButtonText}>🇪🇺 Euros (€)</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.converterButton}
                onPress={() => buttonPressed('POUND')}
              >
                <Text style={styles.converterButtonText}>🇬🇧 Pounds (£)</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.converterButton}
                onPress={() => buttonPressed('AUSDOLLAR')}
              >
                <Text style={styles.converterButtonText}>🇦🇺 Aus Dollars ($)</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.converterButton}
                onPress={() => buttonPressed('CANDOLLAR')}
              >
                <Text style={styles.converterButtonText}>🇨🇦 Can Dollars ($)</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.converterButton}
                onPress={() => buttonPressed('YEN')}
              >
                <Text style={styles.converterButtonText}>🇨🇳 Yen (¥)</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.converterButton}
                onPress={() => buttonPressed('DINAR')}
              >
                <Text style={styles.converterButtonText}>🇲🇦 Dinhar (د.ك)</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(175, 15, 105)',
    marginVertical: 5,
  },
  resultContainer: {
    height: 70,
    width: 325,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgb(175, 15, 105)',
    backgroundColor: 'rgb(175, 15, 105)',
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
    borderColor: 'rgb(175, 15, 105)',
    borderRadius: 10,

  },
  input: {
    color: 'rgb(175, 15, 105)',
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: 'column',
    marginTop: 20,
  },
  converterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(250, 245, 245)',
    height: 50,
    borderWidth: 2,
    borderColor: 'rgb(250, 255, 255)',
    borderRadius: 10,
    marginVertical: 5,
  },
  converterButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(175, 15, 105)'
  }
});
