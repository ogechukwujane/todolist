import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Header=()=> {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todos</Text>
    </View>

  )
};

const styles=StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'coral',
    
  },
  title: {
   textAlign: "center",
   padding: 10,
    color: '#fff',
    fontSize: 22,
    fontWeight: "bold",
  }
})

export default Header;