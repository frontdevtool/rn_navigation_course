import HomeScreen from "@/screens/HomeScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import SettingsScreen from "@/screens/SettingsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainStackNavigator from "./MainStackNavigator";

const Drawer = createDrawerNavigator();

export default function MainDrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{headerShown : false}}>
      <Drawer.Screen name="MainStackNavigator" component={MainStackNavigator} />
      <Drawer.Screen name="profile" component={ProfileScreen} options={{headerShown : true}}/>
   
    </Drawer.Navigator>
  );
}
