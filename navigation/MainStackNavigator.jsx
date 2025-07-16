import Feed from "@/screens/tabScreens/Feed";
import HomeScreen from "@/screens/HomeScreen";
import TweetDetailScreen from "@/screens/homeStack/TweetDetailScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import SettingsScreen from "@/screens/SettingsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { Pressable } from "react-native";

const MainStackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
  
      <Stack.Screen name="feed" component={Feed}  />
      <Stack.Screen name="TweetDetailScreen" component={TweetDetailScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
