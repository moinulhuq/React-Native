/* There are two types of data that control a component 'props' and 'state'. 'props' are set by the parent and they are fixed throughout the lifetime of a 
   component. For data that is going to change, we have to use state. In general, you should initialize state in the constructor, and then call setState 
   when you want to change it.
*/ 

/* 1. Use of 'state' on component. */ 

import React, { Component } from 'react';
import { AppRegistry, Text, View, StatusBar } from 'react-native';

export default class HelloWorldApp extends Component {

  /* Declare 'state' using constructor */ 
  constructor (props) {
     super(props)
     this.state = {
       text: 'Hello World'
     }
  }

  /* Change 'state' value onlick */ 
  updateState = () => { 
  	this.setState({ text: 'The state is updated' }) 
  }

  render() {

    return (
      <View>
      	<StatusBar hidden />

      	{/* Printing 'state' value */}

        <Text onPress = {this.updateState}>{this.state.text}</Text>

      </View>
    );

  }
}

AppRegistry.registerComponent('MyApp', () => HelloWorldApp);




