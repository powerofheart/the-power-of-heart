import React from 'react';
import {
  View,
  Button,
  Image,
  Text
} from 'react-native';

export default (props)=>{
  const charsArr = [];
  props.characters.forEach((char) =>{ 
    const {name, charClass, desc, traits, moves, level} = char;
    charsArr.push(
    <View key={char.name}>
      <Text>
      {name} 
      {charClass} 
      {level}
      </Text>
    </View>
  ) 

  })
  return (
    <View>
      {charsArr}
    </View>
  )
}
