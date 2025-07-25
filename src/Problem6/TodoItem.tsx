import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

// This is a simple React Native component that displays a greeting message

interface MyComponentProps {
  title: string;
  onDelete?: () => void;
}

const TodoItem: React.FC<MyComponentProps> = ({ title, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">
          {title}
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={
          // Handle delete action here
          onDelete ? onDelete : () => console.log('Delete action not defined')
        }
      >
        <Text>Delete</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'purple',
    borderRadius: 8,
    marginVertical: 8,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1, // take available space
    paddingRight: 8, // add spacing before delete button
  },
  text: {
    fontSize: 16,
    color: 'white',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 70,
  },
});

export default TodoItem;
