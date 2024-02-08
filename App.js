import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');

  const handlePress = (value) => {
    if (displayValue === '0') {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  const handleClear = () => {
    setDisplayValue('0');
  };

  const handleCalculate = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCalculate()}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#333' }]} onPress={() => handleClear()}>
          <Text style={[styles.buttonText, { color: '#fff' }]}>C</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  display: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    width: '100%',
    backgroundColor: '#111',
  },
  displayText: {
    fontSize: 40,
    color: '#fff',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#555',
    borderRadius: 5,
    width: 80,
    height: 80,
    margin: 10,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});
