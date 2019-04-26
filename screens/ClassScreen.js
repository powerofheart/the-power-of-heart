import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class ClassScreen extends Component {
  constructor() {
    super()
    this.state= {
      className: ['Mundane', 'Warlocks', 'Witches'],
      classDesc: ['Whatever dude', 'Dude with long hair', 'Sabrina']
    }
  }

  render() {
    const { className, classDesc } = this.state;
    const classArray = [];

    for (let i = 0; i < className.length; i++) {
      classArray.push(
        <View>
          <Text>{ className[i] }</Text>
          <Text>{ classDesc[i] }</Text>
        </View>
      )
    }

    return (
      <View>
        <View>
         { classArray }
        </View>
        <Button title='NEXT' />
      </View>
    );
  }
}

