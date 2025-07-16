import HomeScreen from "@/screens/HomeScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import SettingsScreen from "@/screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MainStackNavigator from "./MainStackNavigator";
import MainTopTabNavigator from "./MainTopTabNavigator";
import Feed from "@/screens/tabScreens/Feed";
import Ionicons from '@expo/vector-icons/Ionicons';
const MainBottomTabsNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MainStackNavigator"
        component={MainStackNavigator}
        options={{
          tabBarLabel :'feed',
          headerShown : false ,
          tabBarIcon: ({ color , focused}) => (
            <Ionicons name="home" size={24} color={color} />
          ),
          tabBarActiveTintColor : 'red'
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="profile" size={24} color={color}  />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainBottomTabsNavigator;
