import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState<string>('');
  const [result, setResult] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>

      <TextInput
        style={styles.input}
        placeholder="<name>"
        placeholderTextColor="#888"
        value={inputText}
        onChangeText={setInputText}
      />

      <TouchableOpacity style={styles.button} onPress={() => setResult('Hello ' + inputText)}>
        <Text style={styles.buttonText}>Hello</Text>
      </TouchableOpacity>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resultContainer: {
    marginTop: 25,
    padding: 15,
    backgroundColor: '#e1f5fe',
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0288d1',
  },
});