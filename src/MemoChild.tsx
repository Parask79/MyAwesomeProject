import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  AnimatableStringValue,
} from 'react-native';

interface Props {
  message: String;
}

const MemoChild = ({ message }: Props) => {
  console.log('MemoChild rendered with message:', message);
  return (
    <View>
      <Text style={styles.title}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  card: {
    padding: 20,
    backgroundColor: '#4682B4',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
  },
});

export default React.memo(MemoChild);
