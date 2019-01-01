/* React Native uses native components (<View>, <Text>, <Image>) instead of  web components (<div>, <p>, <img>) as building blocks. It uses JSX - 
   embedding XML within JavaScript '<View><Text>Hello world!</Text></View>'. Anything you see on the screen is some sort of component which means
   'HelloWorldApp' we are going to create is component. Component required is a render function which returns some JSX to render. Actually, HTML 
   tag is component in react-native. 

	HTML - Tag
	----------
	<p> </p>
	<img> </img>

	React-native - Component
	------------------------
	<Image>
	<View></View>

	React Native provides a number of built-in components like 'Text', 'View', 'StatusBar', 'Image' all are Components
*/ 

/* 1. Basic "Hello world"  program */ 

/* import React from 'react' framwork. */
import React, { Component } from 'react';
/* import Component from 'react-native' framwork. */
import { AppRegistry, Text, View, StatusBar, Image } from 'react-native';


/* 'HelloWorldApp' itself is a Component. */
export default class HelloWorldApp extends Component {
  render() {
    return (
    /* JSX */	
      <View>
      	<StatusBar hidden />
        <Text>Hello world!</Text>
      </View>

    );
  }
}

/* 'MyApp' is the foldername and 'HelloWorldApp' is class name.  */ 
AppRegistry.registerComponent('MyApp', () => HelloWorldApp);
