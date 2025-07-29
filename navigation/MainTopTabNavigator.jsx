import Feed from "@/screens/tabScreens/Feed";
import HomeScreen from "@/screens/HomeScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TopTab = createMaterialTopTabNavigator();

export default function MainTopTabNavigator() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontWeight: "bold",
        },
      }}
    >
      <TopTab.Screen name="Main" component={Feed} />
      <TopTab.Screen name="profile" component={ProfileScreen} />
    </TopTab.Navigator>
  );
}
