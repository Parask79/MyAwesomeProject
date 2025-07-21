import { useEffect } from 'react';
import React, { use } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Timer = () => {
  const [seconds, setSeconds] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    console.log('Timer started');

    return () => {
      clearInterval(interval);
      console.log('Timer stopped');
    }; // Cleanup on unmount
  }, []);

  return (
    <View style={style.container}>
      <Text style={style.text}>Seconds: {seconds}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default Timer;
