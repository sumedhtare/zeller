import {Text, ScrollView, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Pressable} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');

export default function QuickActions() {
  return (
    <>
      <Text className="text-white font-bold px-[10]">Quick Actions</Text>
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
    progress.value = withTiming(1, {duration: 500}, () => {
      progress.value = withTiming(0, {duration: 500});
    });
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
  return (
    <Pressable onPress={handlePress}>
      <Animated.View style={[styles.action, animatedStyle]}>
        <Text className="px-[10]">Theater</Text>
        <Text className="px-[10]">3 Devices</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  action: {
    height: height * 0.08,
    width: width * 0.3,
    backgroundColor: '#FFF',
    marginLeft: 5,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
