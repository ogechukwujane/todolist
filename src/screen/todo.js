import React,{useState} from 'react';
import {View,Text,StyleSheet,FlatList } from 'react-native';
import Header from '../components/header';
import TodoItems from '../components/todolist';
import Form from '../components/form';

const Todo =()=> {

const[todos, setTodos] = useState([
  {text: 'praying' , key: '1'},
  {text: 'chores' , key: '2'},
  {text: 'bathing' , key: '3'},
  {text: 'learning' , key: '4'},
  {text: 'resting' , key: '5'},
]);

const pressHandler = (key) => {
  setTodos((prevTodos) => {
    return prevTodos.filter(todos => todos.key != key);
  });
};

const submitHandler =(text)=> {
  setTodos((prevTodos)=> {
    return [
      { text: text , key: Math.random().toString()},
      ...prevTodos
    ];
  });

}

  

  return (
    <View style={styles.container}>
     <Header/>
     <View>
       <Form submitHandler={submitHandler}
        />
      <View style={styles.list}>
       <FlatList
         data={todos}
        renderItem={({ item })=> (
           <TodoItems item={item} 
           pressHandler={pressHandler}/>
         )}
       />
      </View>
     </View>
    </View>
  )
};

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    margin: 3
  },
  list: {
    margin: 20,
    //padding: 20,
    //paddingTop: 20
  },
  
})

export default Todo;

