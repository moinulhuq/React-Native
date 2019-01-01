/* We can use external js for 'HelloWorldApp' */ 

import { AppRegistry } from 'react-native';
import App from './App'; /* Here we are calling 'App.js' and rename 'HelloWorldApp' to 'App' when calling. */ 


/* 'MyApp' is the foldername and 'App' is alias name of 'HelloWorldApp' class.  */
AppRegistry.registerComponent('MyApp', () => App);
