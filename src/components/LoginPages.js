import React, {Component} from 'react';
import { Text, TextImput, Button, View, TouchableOpacuty } from 'react-native';
import { createStackNavigator} from 'react-navigation';
import RegisterPages from './RegisterPages';
import HomePages from './LoginPages';

export default class LoginPages extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.textfields}>
                    <TextImput style = {styles.input}>
                        placeholder = "username"
                        returnKeyType = "next"
                        onSubmitEditing = {() => this.passwordInput.focus()}
                        keyboarType = "email-address"
                        autoCapitalize = "none"
                        autoCorrect = {false}
                    </TextImput>
                    <textImput style = {styles.input}>
                        placeholder = "password"
                        returnKeyType = "go"
                        secuteTextEntry ref = {(input) =>this.passwordInput =input}
                    </textImput>
                    <TouchableOpacuty style = {styles.buttoncontainer} onPress = {() =>this.props.navigation.navigate('Home')}>
                        <Text style ={styles.buttontext}> Login </Text>
                    </TouchableOpacuty>
                    <Button     
                        title = "Register Here"
                        color = "#1abc9c"
                        onPress = {() => this.props.navigation.navigate('Register')}
                    />
                </View>
            </View>


        );
    }
}

export default class App extends Component {
    render () {
        return (
            <AppStackNavigator />

        );
    }
}

const AppStackNavigator = createStackNavigator ({
    Login : LoginPages,
    Register : RegisterPages,
    Home: HomePages
});


const styles = {
    container : {
      padding: 10,
      flex: 1,
      backgroundColor: '#ecf0f1',
      justifyContent:'center',
      alignItems: 'Stretch'
    },
  
    input: {
      paddingLeft: 20,
      borderRadius: 50,
      heigth:50,
      fontSize:25,
      backgroundColor:'white',
      borderColor: '#1abc9c',
      borderWidth: 1,
      marginBottom: 20,
      color:'#34495e'
      
    },
    buttoncontainer: {
      heigth:50,
      width:300,
      borderRadius: 50,
      backgroundColor: '#1abc9c',
      paddingVertical: 10,
      justifyContent: 'center'
    },
    buttonText: {
      textAlign:'center',
      color:'#ecf0f1',
      fontSize:20,
    }
    
  }