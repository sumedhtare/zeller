import {View, Image} from 'react-native';
import React from 'react';
import Animated, {FadeInUp} from 'react-native-reanimated';

type FormContainerType = {
  children?: React.ReactNode;
};

export default function FormContainer({children}: FormContainerType) {
  return (
    <View className="bg-white h-full w-full">
      <Image
        source={require('../../assets/images/background.png')}
        className="h-full w-full absolute"
      />
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify().damping(3)}
          source={require('../../assets/images/h-light.png')}
          className="h-[225] w-[90]"
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify().damping(3)}
          source={require('../../assets/images/h-light.png')}
          className="h-[160] w-[65]"
        />
      </View>

      {children}
    </View>
  );
}
