/* componentDidMount() is invoked immediately after a component is mounted. If you need to load data from a remote endpoint, 
   this is a good place to instantiate the network request.
*/ 

/* 1. Use of 'componentDidMount'. */ 

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

  /* componentDidMount */ 
  componentDidMount(){
  	this.setState({ text: 'Hello World Moin' }) 
  }

  render() {
    return (
    /* JSX */	
      <View>
      	<StatusBar hidden />
        <Text>{this.state.text}</Text>
      </View>

    );
  }
}


AppRegistry.registerComponent('RedCrow', () => HelloWorldApp);




