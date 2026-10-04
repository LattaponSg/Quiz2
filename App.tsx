import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {cals} from './cal'

export default function App() {
  const [inputText, setInputText] = useState<string>('');
  const [inputText2, setInputText2] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [result2, setResult2] = useState<string>('');
  const [result3, setResult3] = useState<string>('');

  function Winner(){
    if (result === result2){
        return setResult3("Fair");
    } else if (result == "Rock" && result2 == "Paper"){
        return setResult3(inputText2 + " Winner");
    } else if (result == "Scissors" && result2 == "Rock"){
        return setResult3(inputText2 + " Winner");
    } else if (result == "Paper" && result2 == "Scissors"){
        return setResult3(inputText2 + " Winner");
    } else {
        return setResult3(inputText + " Winner")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rock, Paper, Scissors</Text>

      <TextInput
        style={styles.input}
        testID = "player1"
        placeholder="Player 1"
        placeholderTextColor="#888"
        value={inputText}
        onChangeText={setInputText}
      />
      
      <View style={styles.RowButton}>
        <TouchableOpacity style={styles.button} testID = "rock" onPress={() => setResult('Rock')}>
          <Text style={styles.buttonText}>Rock</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} testID = "paper" onPress={() => setResult('Paper')}>
          <Text style={styles.buttonText}>Paper</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} testID = "sicissors" onPress={() => setResult('Scissors')}>
          <Text style={styles.buttonText}>Scissors</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        testID = "player2"
        placeholder="Player 2"
        placeholderTextColor="#888"
        value={inputText2}
        onChangeText={setInputText2}
      />

        <View style={styles.RowButton}>
          <TouchableOpacity style={styles.button} testID = "rock2" onPress={() => setResult2('Rock')}>
            <Text style={styles.buttonText}>Rock</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} testID = "paper2" onPress={() => setResult2('Paper')}>
            <Text style={styles.buttonText}>Paper</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} testID = "sicissors2" onPress={() => setResult2('Scissors')}>
            <Text style={styles.buttonText}>Scissors</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttonW} testID = "winner" onPress={() => Winner()}>
          <Text style={styles.buttonText}>Winner</Text>
        </TouchableOpacity>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result ? `${inputText || 'Player 1'}: ${result}` : ''}</Text>
        <Text style={styles.resultText}>{result2 ? `${inputText2 || 'Player 2'}: ${result2}` : ''}</Text>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result3}</Text>
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
    marginBottom: 30,
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
  RowButton:{
    flexDirection: 'row',      
    justifyContent: 'space-between', 
    width: '100%',               
    marginBottom: 15,
    gap: 10,
  },
  button: {
    flex: 1,
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonW: {
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