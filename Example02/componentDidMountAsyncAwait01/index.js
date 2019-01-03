/* 

Step1: Install "json-server" for fake data to work with the React Native FlatList.

	npm install -g json-server

Step2: Create 'db.json' and put it in the 'db' folder inside root folder.

	{
	    "list": 
	        [
	            {"key": "Devina"},
	            {"key": "Jackson"},
	            {"key": "James"},
	            {"key": "Joel"},
	            {"key": "John"},
	            {"key": "Jillian"},
	            {"key": "Jimmy"},
	            {"key": "Julie"}
	        ]
	}
	
Step3: Start json-server.

	json-server --watch db/db.json --port=5200

Step4: Now we can call this inside our 'componentDidMount'.

    fetch(`http://localhost:5201/list`)
      .then(res => res.json())
      .then(json => this.setState({ text: json }));	

*/ 

/* 1. External use of FetchData for 'componentDidMount' with async / await. */ 

import React, { Component } from 'react';
import { AppRegistry, Text, View, StatusBar, FlatList } from 'react-native';
import ajax from './service/FetchData';


export default class HelloWorldApp extends Component {

  /* Declare 'state' using constructor */ 
  constructor (props) {
     super(props)
     this.state = {
       text: []
     }
  }

  /* componentDidMount */ 
  async componentDidMount(){
    const json = await ajax.fetchUsers();
    this.setState({text: json });
  }

  render() {
    return (
    /* JSX */	
      <View>
      	<StatusBar hidden />
        <FlatList
        data={this.state.text}
          renderItem={({item}) => <Text style={{color: 'red' , fontSize: 30}}>{item.key}</Text>}
        />
      </View>

    );
  }
}


AppRegistry.registerComponent('RedCrow', () => HelloWorldApp);



