import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import CharContainer from './CharContainer';

export default (props)=>{
  const {characters} = props;
  return (
    <View style = {styles.swag}>
      <Text>
        Hello World
      </Text>
      <CharContainer characters = {characters} />
    </View>
  )
}

const styles = StyleSheet.create({
  swag: {
    flex: 1,
    paddingTop: 25
  }
})
