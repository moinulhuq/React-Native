/* 3. Another use of 'state' on component. */ 

import React, { Component } from 'react';
import { AppRegistry, Text, View, StatusBar, TextInput } from 'react-native';

export default class HelloWorldApp extends Component {

  /* Declare 'state' using constructor */ 
  constructor (props) {
     super(props)
     this.state = {
       input: ''
     }
  }

  /* Change 'state' value onlick */ 
  handleChangeInput = (text) => { 
  	this.setState({ input: text })
  }

  render() {

    return (
      <View>
      	<StatusBar hidden />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={this.handleChangeInput}
        />
        <Text>{this.state.input}</Text>
      </View>
    );

  }
}

AppRegistry.registerComponent('MyApp', () => HelloWorldApp);



