/* External js for 'HelloWorldApp' */ 

import React, { Component } from 'react';
import { AppRegistry, Text, View, StatusBar, Image } from 'react-native';


export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <StatusBar hidden />
        <Text>Hello world!</Text>
      </View>

    );
  }
}
