import {
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
import React from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Pressable} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');

const data = [
  {
    name: 'room1',
    id: 1,
  },
  {
    name: 'room2',
    id: 2,
  },
  {
    name: 'room3',
    id: 3,
  },
  {
    name: 'room4',
    id: 4,
  },
  {
    name: 'room5',
    id: 5,
  },
];

export default function Rooms() {
  const renderItem = ({item}: any) => <Actions data={item} />;

  return (
    <View>
      <Text className="px-[10]">Rooms</Text>
      <FlatList
        className="mt-2"
        contentContainerClassName="flex-column items-center gap-2 pb-2 pt-1"
        style={styles.container}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
}

function Actions({data}: any) {
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
        <Text className="px-[10]">{data?.name}</Text>
        <Text className="px-[10]">3 Devices</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  action: {
    height: height * 0.14,
    width: width * 0.97,
    backgroundColor: '#FFF',
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
  container: {
    height: height * 0.415,
  },
  list: {
    flexGrow: 1, // Ensures the FlatList fills the remaining height
  },
});
