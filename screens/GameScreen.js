
import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

import styles from '../styles/gameScreen.scss';
// import styles from '../styles/_colors.scss';

export default class GameScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      moveList: [ 'kick', 'punch', 'cry' ]
    }
  }

  render(){
    const moveListArray = this.state.moveList.map((item, i) => {
      <Text key={ i }>
        { item }
      </Text> 
    })
    return (
      <View>
        <Image />
        <View>
          <Text style={styles.test}>Name  |  { charClass }</Text>
          <Text>Harm: { harmCount }</Text>
          <Text>Luck: { luckCount }</Text> 
        </View>
      </View>
      <Text>
        Charm: { charmCount }  
        |  Cool: { coolCount }  
        |  Sharp: { sharpCount }  
        |  Tough: { toughCount }  
        |  Weird: { weirdCount }
      </Text>
      <Text>Character Move List</Text>
      { moveListArray }
      <View>
        <Button>Back</Button>
        <Button>Roll</Button>
      </View>
    )

  }
}