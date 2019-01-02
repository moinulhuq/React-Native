/* 2. Another use of 'state' on component. */ 

import React, { Component } from 'react';
import { AppRegistry, Text, View, StatusBar, Button } from 'react-native';

export default class HelloWorldApp extends Component {

  /* Declare 'state' using constructor */ 
  constructor (props) {
     super(props)
     this.state = {
       value: 0,
       message: 'Counter'
     }
  }

  /* Change 'state' value onlick */ 
  onClick = () => { 
  	this.setState({ value: this.state.value+1 });
  	this.setState({ message: `Counter = ${this.state.value}` });
  }

  render() {
  	
    return (
      <View>
      	<StatusBar hidden />
      	<Text>{this.state.message}</Text>
        <Button onPress={this.onClick} title="ClickMe" color="red"/>
      </View>
    );

  }
}

AppRegistry.registerComponent('MyApp', () => HelloWorldApp);



