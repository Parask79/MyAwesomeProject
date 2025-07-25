import React from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';

const MyComponent = () => {
  const [count, setCount] = React.useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter Example</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          setCount(count + 1);
        }}
      >
        <Text>+</Text>
      </Pressable>

      <Text style={styles.text}>{count}</Text>

      <Pressable
        style={styles.button}
        onPress={() => {
          setCount(count - 1);
        }}
      >
        <Text>-</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default MyComponent;
