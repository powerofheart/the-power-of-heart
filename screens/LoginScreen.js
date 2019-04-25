import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput
} from 'react-native';

export default class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
      email:'',
      registered: true
    }
  }
  static navigationOptions = {
    title: 'Login',
  }

  registerClicked = () => {
    this.setState({registered:false})
  }

  loginUser = () => {

  }

  render() {
    let buttonContent = 'Login';
    let emailField = null;
    return (
      <View styles={ styles.container }>
        <Text>The Power of Heart</Text>
          <TextInput placeholder="username" onChangeText={(username)=>this.setState({username})} value={this.state.username}/>
          <TextInput placeholder="password" onChangeText={(password)=>this.setState({password})} value={this.state.password}/>
      {(!this.state.registered) && (<TextInput placeholder="email" onChangeText={(email)=>this.setState({email})} value={this.state.email}/>) }
      {this.state.registered && <Button onPress={ this.loginUser } title='Log in' />}
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
