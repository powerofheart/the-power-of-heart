import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CharSelectScreen from '../screens/CharSelectScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MoveSetSelectionScreen from '../screens/MoveSetSelectionScreen';

import GameScreen from '../screens/GameScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  MoveSetSelection: MoveSetSelectionScreen,
  CharacterSelect: CharSelectScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const DevStack = createStackNavigator({
  Dev: GameScreen,
});

DevStack.navigationOptions = {
  tabBarLabel: 'Dev',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  SettingsStack,
  DevStack
});
