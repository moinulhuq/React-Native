/* React Native customize components with 'name' props. */ 

/* 1. Built-in "source" prop for <Image> component. */ 

import React, { Component } from 'react';
import { AppRegistry, Text, View, StatusBar } from 'react-native';


/* Customize components */ 
class Greeting extends Component {
  render() {
    return (
      <View>
      	<StatusBar hidden />
      	
      	{/* Setting parameter for 'name' prop */}
      	
      	<Text>Hello {this.props.name}!</Text> 

      </View>
    );
  }
}

export default class HelloWorldApp extends Component {
  render() {
    
    return (
      <View style={{alignItems: 'center'}}>
      	
      	{/* Passing parameter for 'name' prop */}

        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />

      </View>
    );

  }
}

AppRegistry.registerComponent('MyApp', () => HelloWorldApp);




