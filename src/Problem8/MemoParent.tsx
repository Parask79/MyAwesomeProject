import React, { use, useRef } from 'react';
import { useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput } from 'react-native';
import MemoChild from './MemoChild';

const MemoParent = () => {
  console.log('MemoParent component rendered');
  const [count, setCount] = React.useState(0);
  const [textInput, setTextInput] = React.useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Type something..."
        onChangeText={text => {
          setTextInput(text);
          console.log('Text input changed:', text);
        }}
      ></TextInput>

      <Text style={styles.title}>Counter</Text>
      <Text style={styles.subtitle}>{count}</Text>
      <MemoChild message={textInput}></MemoChild>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: 'black',
  },
  textInput: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
});

export default MemoParent;
