import React from 'react';
import { View, Text, StyleSheet ,Button ,TouchableOpacity } from 'react-native';
//import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

const Home = () => (

  <View style={styles.container}>
    <View style={styles.menu}>
      <TouchableOpacity style={styles.menuButton} > <Text style={styles.menuButtonText}>Menu 1</Text></TouchableOpacity>
      <TouchableOpacity style={styles.menuButton} > <Text style={styles.menuButtonText}>Menu 2</Text></TouchableOpacity>
    </View>
    <View style={styles.body}>
      <Text>C 1</Text>
      <Text>C 2</Text>
    </View>
  </View>
);

const App = () => {
  return (
    <Home/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  menu:{
    flexDirection: 'row',
    width: '100%',
    height: 30,
    paddingTop: 5,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    boxShadow: '0px 2px 9px #F4AAB9',
  },
  body:{

  },
  menuButton: {
    width:80,
    height: '100%',
    backgroundColor: 'white',
    alignContent: 'center',
    alignItems: 'center',
    borderColor: '#dadada',
    borderRightWidth: 1,
  },
  menuButtonText : {
    color: '#003e9b',
    alignItems: 'center',
  }, 
  
  
});

export default App;
