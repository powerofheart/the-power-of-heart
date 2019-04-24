import React from 'react';
import { View, StyleSheet } from 'react-native';
import Char from './Char';

export default (props)=>{
  const charsArr = [];
  const {characters} = props;
  characters.forEach(char => charsArr.push(<Char character={char} />));
  return (
    <View>
      {charsArr}
    </View>
  )
}
