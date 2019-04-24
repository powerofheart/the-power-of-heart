import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import CharSelect from '../components/CharSelect';
/*
{
  name: '',
  charClass: '',
  desc: '',
  traits: {
    charm: 0,
    cool: 0,
    sharp: 0,
    tough: 0,
    weird: 0
    },
  moves: ['punch', 'kick']
}

*/

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
  static navigationOptions = {
    header: null,
  };

  render() {
    const chars = [];
    const traits1 = new TraitsConstructor(1,2,3,4,5);
    const traits2 = new TraitsConstructor(2,1,4,3,5);
    const char1 = new CharConstructor('shane', 'druid', 'an honest man', traits1, ['punch', 'kick', 'talk', 'joke']);
    const char2 = new CharConstructor('alice', 'normie', 'totally unremarkable', traits2, ['punch', 'kick', 'talk', 'joke']);
    chars.push(char1);
    chars.push(char2);
    return (
      <View style={styles.container}>
      <Text>{JSON.stringify(chars)}</Text>
        <CharSelect characters={chars}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
