import React from 'react';
import {Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginComp from '../components/LoginComp';
import CharSelectScreen from '../screens/CharSelectScreen'

const LoginNav = createStackNavigator(
  {
    Login: LoginComp,
    CharSelect: CharSelectScreen
  },
  {
    initialRouteName: "Login"
  }
)

const LoginContainer = createAppContainer(LoginNav)

export default LoginContainer;
