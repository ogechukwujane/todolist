import React from 'react';
import {View,TouchableOpacity,Text,StyleSheet} 
from 'react-native';

const TodoItems =({ item, pressHandler })=> {
  return (
    <TouchableOpacity style={styles.btn} 
    onPress={()=> pressHandler(item.key)} >
      <Text style={styles.texts}>{item.text}</Text>
    </TouchableOpacity>

  )
};

const styles=StyleSheet.create({
  btn: {
    height: 40,
    //borderWidth: 1,
    borderRadius: 8,
    margin: 15,
    paddingTop:10,
    borderColor: 'coral',
    borderWidth: 1,
    
   
   // backgroundColor: 'coral'
  },
  texts: {
    marginLeft: 10,
    fontSize: 15,
    color: 'gray',
    fontStyle: "italic",
    fontWeight: "bold"

  }
});

export default TodoItems;