import React from 'react';
import {View, Text, Button} from 'react-native';
import Char from '../components/Char';

function CharConstructor(name, charClass, level, desc, traits, moves){
  this.name = name;
  this.charClass = charClass;
  this.level = level;
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

export default (props)=>{
    const chars = [];
    const traits1 = new TraitsConstructor(1,2,3,4,5);
    const traits2 = new TraitsConstructor(2,1,4,3,5);
    const char1 = new CharConstructor('shane', 'druid', 5, 'an honest man', traits1, ['punch', 'kick', 'talk', 'joke']);
    const char2 = new CharConstructor('alice', 'normie', 1, 'totally unremarkable', traits2, ['punch', 'kick', 'talk', 'joke']);
    chars.push(char1);
    chars.push(char2);

  return(
  <View>
    <Char characters = {chars} />
    <Button title="Create Character" onPress={()=>{}}/>
  </View>
  )
}
