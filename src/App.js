import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";
import TaskCard from "./TaskCard";

const App = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTasks = () => {
    if(text.length != 0){
      setTasks([...tasks, text]); 
      setText("");
    } else {
      Alert.alert('Warning', 'Boş task ekleyemezsiniz!',);
      {text: 'OK'}
    }
    
  }
  
  const handleDeleteTodo = (index) => {
    console.log(index);
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  const deleteAll = () => {
    setTasks([]);
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.desc}> Enter your tasks down below.</Text>
        <TouchableOpacity onPress={deleteAll}>
          <Text style={styles.deleteAll}> Delete All </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.input}>
        <TextInput style={styles.textInput} placeholder="Add todo..." onChangeText={setText} value={text} />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleAddTasks}>
          <Text style={styles.buttonText}> Add Task </Text>
        </TouchableOpacity>
        <View style={{height: 1, backgroundColor: '#ddd', marginVertical: 25}}/> 
        <View>
        <FlatList data={tasks} renderItem={({item, index}) => <TaskCard todo={item} handleDelete={() => handleDeleteTodo(index)}/>} keyExtractor={item => item + Math.random }/>
        </View>
      </View>
    </View>
  )
}

export default App;

export const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 50,
    fontFamily: 'sans',
    marginLeft: 25,
    marginTop: 25,
    color: '#40679E'
  },
  desc: {
    marginLeft: 27,
    marginTop: 10,
    color: '#1B3C73',
    fontSize: 15
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 7,
    margin:8,
    marginTop: 15
  },
  input: {},
  buttonContainer: {},
  buttonText: {
    alignSelf: 'flex-end',
    marginRight: 25,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    backgroundColor: '#98ABEE',
  },
  deleteAll : {
    marginLeft: 15,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 12,
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    backgroundColor: '#98ABEE',
    paddingVertical: 8,
    paddingHorizontal: 12,
  }
})