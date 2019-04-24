import React from 'react';
import {
  Image,
  Text
} from 'react-native';

export default (props)=>{
  const {name, desc, charClass, traits, img, moves} = props.character;
  return (
    <Text>
      {name} 
      {charClass} 
      {desc} 
      {JSON.stringify(traits)} 
      {JSON.stringify(moves)} 
    </Text>
  )
}
