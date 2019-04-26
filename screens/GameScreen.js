import React from 'react';
import {
  Image,
  Text,
  View,
  Button,
} from 'react-native';

// import styles from '../styles/gameScreen.scss';
// import styles from '../styles/_colors.scss';

export default class GameScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      moveList: [ 'kick', 'punch', 'cry' ],
      harmCount: 5,
      luckCount: 3,
      charmCount: 2,
      sharpCount: 1,
      toughCount: -1,
      weirdCount: 1
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
        <View>
          <View>
            <Text>Name  |  { this.state.charClass }</Text>
            <Text>Harm: { this.state.harmCount }</Text>
            <Text>Luck: { this.state.luckCount }</Text> 
          </View>
        </View>
        <Text>
          Charm: { this.state.charmCount }  
          |  Cool: { this.state.coolCount }  
          |  Sharp: { this.state.sharpCount }  
          |  Tough: { this.state.toughCount }  
          |  Weird: { this.state.weirdCount }
        </Text>
        <Text>Character Move List</Text>
        { moveListArray }
        <View>
          <Button title='BACK' />
          <Button title='ROLL' />
        </View>
      </View>
    )

  }
}