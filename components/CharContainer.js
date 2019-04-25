import React from 'react';
import { Button, View, StyleSheet, Alert } from 'react-native';
import Char from './Char';
import ButtonComponent from './ButtonComponent';

export default (props)=>{
  const charsArr = [];
  const {characters} = props;
  characters.forEach((char, i) => charsArr.push(<Char character={char} key={i + 'hey'}/>));
  return (
    <View>
      <Button 
      onPress = { ()=>{Alert.alert('hi')} }
      title="hi"
      color="red" />
      { charsArr }
    </View>
  )
}
