import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
  StyleSheet,
  TextInput
} from 'react-native';
import { CheckBox } from 'react-native-elements'
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { radioButton: 'value1' };
  }
  static navigationOptions = {
    title: 'Select Your Moves',
  }

  registerClicked = () => {
    this.setState({ registered: false })
  }

  loginUser = () => {

  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.pageWrapper}>
        <CheckBox title='value3'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={this.state.radioButton === 'value3'}
          onPress={() => this.setState({ radioButton: 'value3' })}></CheckBox>
        <CheckBox title='value4'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={this.state.radioButton === 'value4'}
          onPress={() => this.setState({ radioButton: 'value4' })}></CheckBox>
        <CheckBox title='value5'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={this.state.radioButton === 'value5'}
          onPress={() => this.setState({ radioButton: 'value5' })}></CheckBox>
        <CheckBox title='value6'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={this.state.radioButton === 'value6'}
          onPress={() => this.setState({ radioButton: 'value6' })}></CheckBox>
        <CheckBox title='value7'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={this.state.radioButton === 'value7'}
          onPress={() => this.setState({ radioButton: 'value7' })}></CheckBox>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  pageWrapper: {
    // flexDirection: "column",
    padding: 60,
    // flex: 1,
    // alignItems: "stretch",
    // justifyContent: "space-between",
    backgroundColor: "purple"
  },
  move: {
    backgroundColor: "green",
    flex: 1,
    margin: 10
  },
  moveSelected: {
    backgroundColor: "yellow",
    flex: 1,
    margin: 10
  },
  moveName: {
    fontSize: 20,
    fontWeight: "bold"
  },
  moveDesc: {
    fontSize: 16
  },
  btn: {

  }
})
