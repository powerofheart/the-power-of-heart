
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

import styles from '../styles/gameScreen.scss';
// import styles from '../styles/_colors.scss';

export default class GameScreen extends React.Component {

    render(){
        return (
            <View>
                <Text style={styles.test}>Play</Text>
            </View>
        )

    }
}