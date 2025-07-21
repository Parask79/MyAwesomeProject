import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Switch,
} from 'react-native';

const ThemeChanger = () => {
  const [darkMode, setDarkMode] = useState(false);
  const dynamicStyles = {
    backgroundColor: darkMode ? '#333333' : '#f2f2f2',
    color: darkMode ? 'white' : 'black',
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: dynamicStyles.backgroundColor },
      ]}
    >
      <Text style={[styles.heading, { color: dynamicStyles.color }]}>
        Theme Changer
      </Text>
      <Switch
        style={styles.switch}
        value={darkMode}
        onValueChange={setDarkMode}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
      />
      <Text style={[styles.heading, { color: dynamicStyles.color }]}>
        React Native Basic TSX File
      </Text>
      <Text style={[styles.heading, { color: dynamicStyles.color }]}>
        React Native Basic TSX File 1
      </Text>
      <Text style={[styles.heading, { color: dynamicStyles.color }]}>
        React Native Basic TSX File 2
      </Text>
      <Text style={[styles.heading, { color: dynamicStyles.color }]}>
        React Native Basic TSX File 3
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  switch: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default ThemeChanger;
