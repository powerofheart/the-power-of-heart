import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  Alert
} from 'react-native';

const users = {};

export default class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
      email:'',
      registered: true,
      users: {
        noah:'password'
      }
    }
  }
  static navigationOptions = {
    title: 'Login',
  }

  registerClicked = () => {
    if (this.state.registered){
      this.setState({registered:false})
    } else{
      if (this.state.users[this.state.username]){
        return Alert.alert('name already taken!');
      }
      const users = {...this.state.users}
      users[this.state.username] = this.state.password;
      this.setState({users:users})
      Alert.alert('Registered!')
      this.loginUser();
    }
  }

  loginUser = () => {
    if(!this.state.registered){
      return this.setState({registered:true})
    }
    if(this.state.users[this.state.username]){
      if(this.state.users[this.state.username] === this.state.password){
        return Alert.alert(`Welcome back, ${this.state.username}`)
      } else{
        Alert.alert('wrong info')
      }
    } else {
      Alert.alert('register new account?');
    }
    this.registerClicked();
  }

  render() {
    let buttonContent = 'Login';
    let emailField = null;
    return (
      <View styles={ styles.container }>
        <Text>The Power of Heart</Text>
          <TextInput 
            placeholder="username" 
            onChangeText={(username)=>this.setState({username})} 
            value={this.state.username}/>
          <TextInput 
            secureTextEntry={true} 
            placeholder="password" 
            onChangeText={(password)=>this.setState({password})} 
            value={this.state.password}/>
      {(!this.state.registered) 
        && 
        (<TextInput 
          placeholder="email" 
          onChangeText={(email)=>this.setState({email})} 
          value={this.state.email}/>) }
        <Button onPress={ this.loginUser } title='Log in' color={!this.state.registered? "#a8d6ff" : null} />
        <Button onPress={ this.registerClicked } title='Register' color={this.state.registered? "#a8d6ff" : null}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  acitveButton: {
  
  },
  inactiveButton: {
    backgroundColor: 'white',
    color: 'lightgrey'
  }
})
