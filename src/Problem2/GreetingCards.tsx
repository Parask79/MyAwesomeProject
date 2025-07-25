import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cards from './Cards';
import { SafeAreaView } from 'react-native-safe-area-context';

// This is a simple React Native component that displays a greeting message

const GreetingCards = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Cards title="Hello, World!" subtitle="Welcome to React Native!" />
      <Cards title="Greetings!" subtitle="This is a simple card component." />
      <Cards title="React Native" subtitle="Building mobile apps with ease." />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GreetingCards;
