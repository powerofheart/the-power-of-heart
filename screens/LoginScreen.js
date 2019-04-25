import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  FormInput,
  StyleSheet,
} from 'react-native';

export default class LoginScreen extends Component {
  state = {
    isRegistered: true,
  }

  static navigationOptions = {
    title: 'Login',
  }

  registerClicked = () => {
    this.setState({ isRegistered: false })
  }

  loginUser = () => {

  }

  render() {
    let buttonContent = 'Login';
    let emailField = null;
    if (!state.isRegistered) {
      emailField = <FormInput></FormInput>
      buttonContent = 'Create Account';
    }
    return (
      <View styles={ styles.container }>
        <Text>The Power of Heart</Text>
          <FormInput></FormInput>
          <FormInput></FormInput>
          { emailField }
          <Button onPress={ this.loginUser } title={ buttonContent } />
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