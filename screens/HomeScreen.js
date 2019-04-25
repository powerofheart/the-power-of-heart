import React from 'react';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import CharSelect from '../components/CharSelect';
import LoginScreen from './LoginScreen';

function CharConstructor(name, charClass, desc, traits, moves){
  this.name = name;
  this.charClass = charClass;
  this.desc = desc;
  this.traits = traits;
  this.moves = moves;
}
function TraitsConstructor(charm, cool, sharp, tough, weird){
  this.charm = charm;
  this.cool = cool;
  this.sharp = sharp;
  this.tough = tough;
  this.weird = weird;
}

export default class HomeScreen extends React.Component {
  /*
  static navigationOptions = {
    header: null,
  };
  */

  render() {
    const chars = [];
    const traits1 = new TraitsConstructor(1,2,3,4,5);
    const traits2 = new TraitsConstructor(2,1,4,3,5);
    const char1 = new CharConstructor('shane', 'druid', 'an honest man', traits1, ['punch', 'kick', 'talk', 'joke']);
    const char2 = new CharConstructor('alice', 'normie', 'totally unremarkable', traits2, ['punch', 'kick', 'talk', 'joke']);
    chars.push(char1);
    chars.push(char2);

    return (
      <LoginScreen />
    )
  }
}
