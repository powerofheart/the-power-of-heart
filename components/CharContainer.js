import React from 'react';
import { View, StyleSheet } from 'react-native';
import Char from './Char';

export default (props)=>{
  const charsArr = [];
  const {characters} = props;
  characters.forEach((char, i) => charsArr.push(<Char character={char} key={i} />));
  return (
    <View>
      {charsArr}
    </View>
  )
}
