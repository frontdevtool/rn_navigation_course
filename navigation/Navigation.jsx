import { View, Text } from 'react-native'
import React from 'react'
import Feed from '@/screens/Feed'
import MainBottomTabsNavigator from './MainBottomTabsNavigator'
import MainStackNavigator from './MainStackNavigator'
import MainDrawerNavigator from './MainDrawerNavigator'

export default function Navigation() {
  return  <MainDrawerNavigator />
    // <View>
      {/* <Feed/> */}
     
    // </View>
  
}