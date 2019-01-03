import React, { Component } from 'react';
import { AppRegistry, Text, View, StatusBar, FlatList } from 'react-native';

export default class HelloWorldApp extends Component {

  render() {
    return (
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
