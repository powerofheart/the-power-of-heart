import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

export default class RollScreen extends Component {
  constructor() {
    super()
    this.state= {
      roll: 0,
      moveName: '',
      moveDesc: ''
    }
  }

  render() {

    return (
      <>
        <View>
          <Image />
          <Text>{ moveName }</Text>
          <Text>{ moveDesc }</Text>
        </View>
        <Button>BACK</Button>
      </>
    );
  }
}

