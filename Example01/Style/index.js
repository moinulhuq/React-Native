/* In react native you can decorate component using 'style' props. It is cleaner to use 'StyleSheet.create' to define several styles in one place. */

/* 1. Use of 'style' on component. */ 

import React, { Component } from 'react';
import { AppRegistry, Text, View, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
  },
  red: {
    color: 'red',
  },
  size:{
  	fontSize: 30
  }
});

export default class HelloWorldApp extends Component {

  render() {

    return (
      <View>
      	<StatusBar hidden />

      	<Text style={{color: 'blue'}}>Blue style text</Text>

      	<Text style={{color: 'red' , fontSize: 30}}>Style Text</Text>
      	
      	<Text style={styles.red}>Style Text</Text>
      	
      	<Text style={[styles.bigblue, styles.size]}>Style Text</Text>


      </View>
    );

  }
}

AppRegistry.registerComponent('MyApp', () => HelloWorldApp);



