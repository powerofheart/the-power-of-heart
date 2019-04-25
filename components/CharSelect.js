import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Char from './Char';

export default (props)=>{
  const {characters} = props;
  return (
    <View style = {styles.swag}>
    </View>
  )
}

const styles = StyleSheet.create({
  swag: {
    flex: 1,
    paddingTop: 25
  }
})
