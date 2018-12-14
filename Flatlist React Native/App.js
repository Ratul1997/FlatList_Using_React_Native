'use_strict';
import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import FlatLists from './component/Flatlists';
import UserInfo from './component/UserInfo';


export default class App extends React.Component {
  render() {
    return (
     <AppStackNavigator/>     
    );
  }
}
const AppStackNavigator = createStackNavigator({
  homescreen : FlatLists,
  Second : UserInfo
})