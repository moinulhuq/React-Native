/* FlatList component works well for long lists of data. It requires two props 'data' and 'renderItem'. 
   
   'data' is the source of information for the list.

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

   'renderItem' takes one item from 'data' and format it.     
   
      renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}

*/ 

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






