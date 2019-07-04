import React, {Component} from 'react';
import { Text, textImput, Button, View, TouchableOpacuty } from 'react-native';
import { createStackNavigator} from 'react-navigation';

export default class HomePages extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.text}> HomePage </Text>
            </View>
        );
    }
}

const styles = {
    container : {
    padding: 20,
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent:'center',
    alignItems: 'Stretch'
    },
    Text: {
    textAlign:'center',
    color:'black',
    fontSize:20
  }
}