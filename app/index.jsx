import * as React from "react";
import {StatusBar, StyleSheet, Text, View } from "react-native";

// import { SegmentedButtons } from "react-native-paper";

import MainBottomTabsNavigator from '../navigation/MainBottomTabsNavigator'
import "./global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import MainStackNavigator from "@/navigation/MainStackNavigator";
import MainDrawerNavigator from "@/navigation/MainDrawerNavigator";
import MainTopTabNavigator from "@/navigation/MainTopTabNavigator";
import Navigation from "@/navigation/Navigation";
const index = () => {
  return (
  
  
  <>
    <StatusBar />  
    <Navigation/>

  </>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default index;
