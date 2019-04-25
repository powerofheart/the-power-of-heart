import React from 'react';
import {
  Button,
  Image,
  Text
} from 'react-native';

export default (props)=>{
  const charsArr = [];
  const {characters} = props;
  characters.forEach((char) =>{ 
    const {name, charClass, desc, traits, moves} = char;
    charsArr.push(
    <Text key={char.name}>
      {name} 
      {charClass} 
      {desc} 
      {JSON.stringify(traits)} 
      {JSON.stringify(moves)} 
    </Text>
  ) 

  })
  const {name, desc, charClass, traits, img, moves} = props.character;
  return (
    <View>
      <View>
        {charsArr}
      </View>
      <Button>
      </Button>
    </View>

  )
}
