import React from 'react';
import {StatusBar, SafeAreaView,View, StyleSheet} 
from 'react-native';
import TodoList from './src/screen/todo'

const App =()=> {
  return (
    <>
     <StatusBar barStyle='dark-content' />
     <View Style={styles.container}>
     <TodoList/>
     </View>
    </>
  )
};

const styles=StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff'
 }
});

export default App;