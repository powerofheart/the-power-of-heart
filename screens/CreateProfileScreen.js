import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';

export default class ProfileScreen extends Component {
  constructor() {
    super()
    this.state= {
      name: '',
      desc: ''
    }
  }

  render() {

    return (
      <>
        <View>
          <TextInput 
            onChangeText={ name => this.setState({ name }) }
          />
          <TextInput 
            multiLine = { true }
            numberOfLines = { 10 }
            placeholder=''
            onChangeText={ desc => this.setState({ desc }) }
            value={ this.state.desc }
          />
        </View>
        <Button>NEXT</Button>
      </>
    );
  }
}

