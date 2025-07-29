import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text,Button } from 'react-native';
import useCounterStore from '../store/store.js'

export default function SettingsScreen() {
   const navigation = useNavigation();
     const count = useCounterStore((state) => state.count)
     const myName = useCounterStore((state) => state.myName)
  const increase = useCounterStore((state) => state.increase)
  const decrease = useCounterStore((state) => state.decrease)

  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-4xl'> Settings Screen</Text>
  {/* <Button title="Increase" onPress={increase} /> */}
  <Button title="Increase" onPress={useCounterStore((state) => state.increase)} />
      <Button title="Decrease" onPress={decrease} />
      <Button title="set name" onPress={useCounterStore((state)=>state.setName  = 'ahmed')} />
      <Text style={{ fontSize: 24 }}>Count: {count}</Text>
      <Text style={{ fontSize: 24 }}>myName: {myName}</Text>
    </View>
  );
}
