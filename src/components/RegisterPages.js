import React, {Component} from 'react';
import { Text, TextImput, Button, View, TouchableOpacuty } from 'react-native';
import { createStackNavigator} from 'react-navigation';

export default class RegisterPages extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.textfields}>
                    <TextImput style = {styles.input}>
                        placeholder = "Coloque seu nome"
                        returnKeyType = "next"
                        onSubmitEditing = {() => this.emailinput.focus()}
                    </TextImput>

                    <TextImput style = {styles.input}>
                        placeholder = "Enter no e-mail"
                        returnKeyType = "next"
                        onSubmitEditing = {() => this.passwordInput.focus()}
                        keyboarTypeType = "email-address"
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        ref = {(input) =>this.emailinput =input}
                    </TextImput>

                    <TextImput style = {styles.input}>
                        placeholder = "Enter password"
                        returnKeyType = "go"
                        secuteTextEntry ref = {(input) =>this.passwordInput =input}
                    </TextImput>
                    <TouchableOpacuty style = {styles.buttoncontainer} onPress = {() =>this.props.navigation.navigate('Login')}>
                        <Text style ={styles.buttontext}> Sing Up </Text>
                    </TouchableOpacuty>
                </View>
            </View>

        );
    }
}