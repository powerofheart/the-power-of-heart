import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginScreen from '../screens/LoginScreen';
import CharSelectScreen from '../screens/CharSelectScreen'

const LoginNav = createStackNavigator({
    Login: LoginScreen,
    CharSelect: CharSelectScreen
  },
  {
    initialRouteName: "Login"
  }
})

export const LoginContainer = createAppContainer(LoginNav)
