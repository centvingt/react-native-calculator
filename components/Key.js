import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const Key = ({ content, keyWasPressed }) => {
  return (
    <TouchableOpacity
      // style={[styles.key, content === '=' ? styles.keyEqual : '']}
      style={[styles.key, content === '=' && styles.keyEqual]}
      onPress={() => keyWasPressed(content)}
    >
      <Text style={styles.keyText}>{content}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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

export default Key

{
  /* <TouchableOpacity style={[styles.key, styles.keyEqual]}>
  <Text style={styles.keyText}>=</Text>
</TouchableOpacity> */
}
