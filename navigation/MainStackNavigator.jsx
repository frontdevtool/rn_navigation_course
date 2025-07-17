import Feed from "@/screens/tabScreens/Feed";
import HomeScreen from "@/screens/HomeScreen";
import TweetDetailScreen from "@/screens/homeStack/TweetDetailScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import SettingsScreen from "@/screens/SettingsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { Pressable } from "react-native";
import MainBottomTabsNavigator from "./MainBottomTabsNavigator";

const MainStackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle: {
          height: 50, // Set custom height
          backgroundColor: 'red',
        },
    }}>
  
      {/* <Stack.Screen name="feed" component={Feed}  /> */}
      <Stack.Screen name="MainBottomTabsNavigator" component={MainBottomTabsNavigator}
      options={{
headerShown : false
      }} />
      <Stack.Screen name="TweetDetailScreen" component={TweetDetailScreen} 
      options={{presentation :'card'}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
