/* React Native components can be customized with different parameters, these parameters called props. In this example, 'source' is prop of <Image> component.

   React-native
   -------------
   <Image source={pic} />

   HTML
   -----
   <img src="#" />

*/ 

/* 1. Built-in "source" prop for <Image> component. */ 

import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';


export default class HelloWorldApp extends Component {
  render() {
    
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    
    return (
		<Image source={pic} style={{width: 193, height: 110}}/>
    );

  }
}

/* 'MyApp' is the foldername and 'HelloWorldApp' is class name.  */ 
AppRegistry.registerComponent('MyApp', () => HelloWorldApp);


