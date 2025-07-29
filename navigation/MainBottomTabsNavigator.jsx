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
import { Pressable , Image } from "react-native";

const MainBottomTabsNavigator = ({navigation}) => {
  
  
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
         screenOptions={{
        tabBarStyle: {
          height: 50, // Change this value to your desired height
          paddingBottom: 10,
          paddingTop: 10,
          // backgroundColor: 'red'
          
        },
           headerStyle: {
          height: 60, // Custom height of the top header
          backgroundColor: 'green',
          // marginBottom : 20
        },
        headerTitleStyle: {
          fontSize: 22,
          // backgroundColor : 'red',
          // marginBottom: 10, // Optional tweak to center title
          height :50
        },
        tabBarLabelPosition :'beside-icon',
         headerLeft: () => (
                <Pressable onPress={() => navigation.openDrawer()}>
                  <Image
                    source={require("../assets/images/favicon.png")}
                    style={{ width: 40, height: 40, borderRadius: 100, marginLeft: 15 }}
                  />
                </Pressable>
              ),
      }}
    >
      <Tab.Screen
        name="feed"
        component={MainTopTabNavigator}
        options={{
          tabBarLabel :'feed',
          // headerShown : false ,
          tabBarIcon: ({ color , focused}) => (
            <Ionicons name="home" size={24} color={color} />
          ),
          tabBarActiveTintColor : 'red',
          headerTitleAlign : 'center'
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
