import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
//
const App = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  // use ref variable won't cause re-render
  // it is used to store mutable values that do not cause re-render when changed
  // it is useful for storing previous values or any mutable value that does not need to be

  const prevCount = useRef(0);

  console.log('Previous count:', prevCount.current);

  useEffect(() => {
    prevCount.current = prevCount.current + 1;
  }, []);

  // console.log('App component rendered');
  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <Text>Press the button to increase the count</Text>
      <Text>Previous Count: {prevCount.current}</Text>

      <Pressable
        style={styles.button}
        onPress={() => {
          setCount(count + 1);
        }}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </Pressable>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});
