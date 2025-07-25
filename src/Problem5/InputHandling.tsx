import React, { use } from 'react';
import { useRef } from 'react';
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
} from 'react-native';

const InputHandling = () => {
  const [name, setName] = React.useState('');
  const updatedName = useRef('');
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={text => {
          updatedName.current = text;
        }}
      ></TextInput>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? 'lightblue' : 'blue' },
        ]}
        onPress={() => {
          setName(updatedName.current);
        }}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
      {name && <Text style={styles.text}>Hello, {name}</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  text: {
    fontSize: 20,
    color: '#333',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '50%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
export default InputHandling;
