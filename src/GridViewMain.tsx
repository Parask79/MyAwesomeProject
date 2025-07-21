import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Cards from './Cards';

const GridViewMain = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.grid}>
        <Cards title="Hello, World!" subtitle="Welcome to React Native!" />
        <Cards title="Greetings!" subtitle="This is a simple card component." />
        <Cards
          title="React Native"
          subtitle="Building mobile apps with ease."
        />
        <Cards title="Hello, Again!" subtitle="More components in the grid." />
        <Cards title="Hi!" subtitle="Another one." />
        <Cards title="Final Card" subtitle="Ending the grid." />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default GridViewMain;
