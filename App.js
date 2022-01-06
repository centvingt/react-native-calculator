import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Key from './components/Key'

export default function App() {
  const [expression, setExpression] = useState('')

  const keyWasPressed = (key) => {
    setExpression(key)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.output}>{expression}</Text>
      <View style={styles.keyboard}>
        <View style={styles.keyboardRow}>
          <Key content="AC" keyWasPressed={keyWasPressed} />
          <Key content="+/–" keyWasPressed={keyWasPressed} />
          <Key content="%" keyWasPressed={keyWasPressed} />
          <Key content="÷" keyWasPressed={keyWasPressed} />
        </View>
        <View style={styles.keyboardRow}>
          <Key content="7" keyWasPressed={keyWasPressed} />
          <Key content="8" keyWasPressed={keyWasPressed} />
          <Key content="9" keyWasPressed={keyWasPressed} />
          <Key content="×" keyWasPressed={keyWasPressed} />
        </View>
        <View style={styles.keyboardRow}>
          <Key content="4" keyWasPressed={keyWasPressed} />
          <Key content="5" keyWasPressed={keyWasPressed} />
          <Key content="6" keyWasPressed={keyWasPressed} />
          <Key content="–" keyWasPressed={keyWasPressed} />
        </View>
        <View style={styles.keyboardRow}>
          <Key content="1" keyWasPressed={keyWasPressed} />
          <Key content="2" keyWasPressed={keyWasPressed} />
          <Key content="4" keyWasPressed={keyWasPressed} />
          <Key content="+" keyWasPressed={keyWasPressed} />
        </View>
        <View style={styles.keyboardRow}>
          <Key content="0" keyWasPressed={keyWasPressed} />
          <Key content="1" keyWasPressed={keyWasPressed} />
          <Key content="=" keyWasPressed={keyWasPressed} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cdcfcd',
    padding: 20,
    paddingTop: 40,
  },
  output: {
    color: '#fff',
    padding: 20,
    flex: 1,
    fontWeight: 'bold',
    fontSize: 40,
    backgroundColor: '#337684',
  },
  key: {
    backgroundColor: '#867e7c',
    padding: 10,
    flex: 1,
    margin: 10,
  },
  keyEqual: { flex: 2 },
  keyText: {
    textAlign: 'center',
  },
  keyboard: {
    marginTop: 20,
    marginLeft: -10,
    marginRight: -10,
  },
  keyboardRow: { flexDirection: 'row', justifyContent: 'space-between' },
})
