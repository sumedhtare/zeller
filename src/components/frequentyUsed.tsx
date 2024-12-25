import {Text, ScrollView, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Pressable} from 'react-native-gesture-handler';

const {width} = Dimensions.get('screen');

export default function FrequentyUsed() {
  return (
    <>
      <Text className="px-[10]">Frequenty used</Text>
      <ScrollView horizontal className="mt-2 pb-2">
        <Actions />
        <Actions />
        <Actions />
        <Actions />
        <Actions />
        <Actions />
      </ScrollView>
    </>
  );
}

function Actions() {
  const progress = useSharedValue(0);

  const handlePress = () => {
    if (progress.get() === 1) {
      progress.value = withTiming(0, {duration: 500});
    } else {
      progress.value = withTiming(1, {duration: 500});
    }
  };
  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 0.5, 1],
      ['#000', '#f50505', '#1bd149'],
    );

    return {
      shadowColor: backgroundColor,
    };
  });

  // const animatedBulb = useAnimatedStyle(() => {
  //   const backgroundColor = interpolateColor(
  //     progress.value,
  //     [0, 1],
  //     ['#000', '#0370CE'],
  //   );

  //   return {tintColor: backgroundColor};
  // });

  return (
    <Pressable onPress={handlePress} className="flex-column items-center">
      <Animated.View style={[styles.action, animatedStyle]}>
        <Animated.Image
          source={require('../../assets/images/light.png')}
          style={[styles.device]}
          resizeMode="contain"
        />
      </Animated.View>
      <Text className="text-center ml-[15px] mt-2 text-xs">Switch 1</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  action: {
    height: width * 0.15,
    width: width * 0.15,
    backgroundColor: '#FFF',
    marginLeft: 15,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  device: {
    width: '80%',
  },
});
