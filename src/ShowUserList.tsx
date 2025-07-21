import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Text,
  FlatList,
} from 'react-native';
import { useFetch } from './APIHandlerCustomHook';

interface User {
  id: number;
  name: string;
  email: string;
}

const ShowUserList = () => {
  const { data, loading, error } = useFetch<User>(
    'https://jsonplaceholder.typicode.com/users',
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Error: {error.message}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ShowUserList;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    marginVertical: 4,
  },
  card: {
    padding: 12,
    backgroundColor: 'purple',
    marginVertical: 8,
    borderRadius: 6,
    width: '100%',
    alignSelf: 'center',
    height: 'auto',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
