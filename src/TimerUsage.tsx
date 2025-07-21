import React, { useState } from 'react';
import {
  View,
  Button,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Text,
} from 'react-native';
import Timer from './Timer'; // Assuming Timer is in the same directory

const TimerUsage = () => {
  const [show, setShow] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.button} onPress={() => setShow(!show)}>
        <Text style={styles.text}>{show ? 'Stop Timer' : 'Start Timer'}</Text>
      </Pressable>

      {show && <Timer />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 20,
    width: '50%',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginVertical: 8,
  },
});

export default TimerUsage;
