import React from 'react';
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
} from 'react-native';
import TodoItem from './TodoItem';

const Todo = () => {
  const [todo, setTodo] = React.useState<string[]>([]);
  const [newtext, setText] = React.useState('');
  const updatedTodo = React.useRef('');
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Todo"
        value={newtext}
        onChangeText={text => {
          updatedTodo.current = text;
          setText(text);
        }}
      ></TextInput>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? 'lightblue' : 'blue' },
        ]}
        onPress={() => {
          setTodo([...todo, updatedTodo.current]);
          setText(''); // Clear the input after adding
        }}
      >
        <Text style={styles.buttonText}>Add Todo</Text>
      </Pressable>
      {todo.map((item, index) => (
        <TodoItem
          key={index}
          title={item}
          onDelete={() => {
            console.log(`Delete action for index: ${index}`);
            const updated = [...todo];
            updated.splice(index, 1);
            setTodo(updated);
          }}
        />
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 50,
    paddingHorizontal: 10,
    width: '80%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    width: '50%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Todo;
