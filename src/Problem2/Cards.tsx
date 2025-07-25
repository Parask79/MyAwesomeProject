import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// This is a simple React Native component that displays a greeting message

interface MyComponentProps {
  title: string;
  subtitle?: string;
}

const Cards = ({ title, subtitle }: MyComponentProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    borderRadius: 8,
    marginVertical: 8,
    //changed width to 48% for better grid layout
    height: 100,
    width: '48%',
  },
  text: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default Cards;
