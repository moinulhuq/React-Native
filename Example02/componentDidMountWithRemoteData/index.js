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

	http://localhost:5201/list

*/ 

/* 1. Another use of 'componentDidMount'. */ 

import React, { Component } from 'react';
import { AppRegistry, Text, View, StatusBar, FlatList } from 'react-native';

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
    fetch(`componentDidMount`)
      .then(res => res.json())
      .then(json => this.setState({ text: json }));
  }

  render() {
    return (
    /* JSX */	
      <View>
      	<StatusBar hidden />
        <FlatList
        data={[
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
              ]}
          renderItem={({item}) => <Text style={{color: 'red' , fontSize: 30}}>{item.key}</Text>}
        />
      </View>

    );
  }
}


AppRegistry.registerComponent('RedCrow', () => HelloWorldApp);



