import {Text, View} from 'react-native';
import React from 'react';
import Animated, {FadeInDown} from 'react-native-reanimated';
import QuickActions from '../components/quickActions';
import FrequentyUsed from '../components/frequentyUsed';
import Rooms from '../components/rooms';

const HomeScreen = () => {
  return (
    <View className="flex-1">
      <View className="h-[25%] w-full bg-blue-600 pt-[15%] px-[20] absolute">
        <Animated.Text
          entering={FadeInDown.duration(1000).springify()}
          className="text-white font-bold text-4xl">
          Welcome Sumedh
        </Animated.Text>
      </View>

      <View className="pt-[32%]">
        <QuickActions />
      </View>

      <View className="pt-5">
        <FrequentyUsed />
      </View>

      <View className="pt-5">
        <Rooms />
      </View>
    </View>
  );
};

export default HomeScreen;
