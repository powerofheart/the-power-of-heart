import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput
} from 'react-native';

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  }

  registerClicked = () => {
  }

  loginUser = () => {

  }

  render() {
    let buttonContent = 'Login';
    let emailField = null;
    return (
      <View styles={ styles.container }>
        <Text>The Power of Heart</Text>
          <TextInput placeholder="username"/>
          <TextInput placeholder="password"/>
          <Button onPress={ this.loginUser } title='Log in' />
          <Button onPress={ this.registerClicked } title='Register' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
})
