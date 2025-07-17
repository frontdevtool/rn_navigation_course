import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import TweetContent from "../../components/TweetContent";
import { Button } from "react-native-paper";

const TweetDetailScreen = () => {

  const navigation = useNavigation()
  const {
    params: { tweet },
  } = useRoute();

  useLayoutEffect(() => {
  navigation.setOptions({
    headerTitle : tweet.author.name,
    // headerStyle :{ backgroundColor: 'green'},
    headerTitleAlign: "center",
    headerPressColor : 'red'
    
  })


  }, [])
  return (
    <View testID="TweetDetailScreen" className="flex-1 ">
      <StatusBar barStyle={"light-content"} />
      <Button mode="contained" className="self-center "
      onPress={()=>navigation.goBack()}
      >go back</Button>
      <TweetContent tweet={tweet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TweetDetailScreen;
