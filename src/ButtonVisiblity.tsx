import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ButtonVisiblity = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'lightblue' : 'blue',
            padding: 10,
            borderRadius: 5,
            width: '50%',
            alignItems: 'center',
          },
        ]}
        onPress={() => setIsVisible(!isVisible)}
      >
        <Text style={{ color: 'white' }}>
          {isVisible ? 'Hide Details' : 'Show Details'}
        </Text>
      </Pressable>

      {isVisible && (
        <View>
          <Text style={styles.text}>
            Here are the details you wanted to see!
          </Text>
          <Text style={styles.text}>
            You can hide them by pressing the button again.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginVertical: 8,
  },
});

export default ButtonVisiblity;
