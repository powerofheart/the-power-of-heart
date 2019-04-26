import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

export default class RollScreen extends Component {
  constructor() {
    super()
    this.state= {
      roll: 0,
      moveName: 'Meow.',
      moveDesc: 'An attack of apathy.'
    }
  }

  render() {

    return (
      <View>
        <View>
          <Text>{ this.state.roll }</Text>
          <Text>{ this.state.moveName }</Text>
          <Text>{ this.state.moveDesc }</Text>
        </View>
        <Button title='BACK' />
      </View>
    );
  }
}