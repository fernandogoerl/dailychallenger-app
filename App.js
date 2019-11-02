import React from 'react'
import { View, Text, Button } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './screens/HomeScreen'
import CreateChallengeScreen from './screens/CreateChallengeScreen'


const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    CreateChallenge: {
      screen: CreateChallengeScreen
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Daily Challenger',
      headerStyle: {
        backgroundColor: '#2699FB',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    headerLayoutPreset: 'center'
  }
)

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App