import {
  Text,
  Pressable,
  Dimensions,
  StyleSheet,
  FlatList,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {getRoomColor, getRoomImage, roomNames} from '../utils/resources';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('screen');

export default function Rooms() {
  const renderItem = ({item}: any) => <Room data={item} />;

  return (
    <View>
      <Text className="px-[10]">Rooms</Text>
      <FlatList
        className="mt-2"
        contentContainerClassName="flex-column items-center gap-2 pb-2 pt-1"
        style={styles.container}
        data={roomNames}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </View>
  );
}

function Room({data}: any) {
  const navigation: any = useNavigation();
  const colors = getRoomColor(data);
  const image = getRoomImage(data);

  const handlePress = () => {
    navigation.navigate('room', {
      data,
    });
  };

  return (
    <Pressable onPress={handlePress}>
      <LinearGradient
        colors={colors.linear0}
        style={[styles.action]}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}>
        <LinearGradient
          colors={colors.linear}
          style={styles.imageBg}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
        />
        <Image source={image} style={styles.image} resizeMode="contain" />
        <Text className="px-[10]">{data}</Text>
        <Text className="px-[10]">3 Devices</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  action: {
    height: height * 0.14,
    width: width * 0.97,
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
    overflow: 'hidden',
    elevation: 5,
  },
  container: {
    height: height * 0.415,
  },
  list: {
    flexGrow: 1, // Ensures the FlatList fills the remaining height
  },
  image: {
    height: '65%',
    width: '40%',
    position: 'absolute',
    right: 0,
    top: 10,
  },
  imageBg: {
    position: 'absolute',
    right: -43,
    top: -80,
    width: 210,
    height: 210,
    borderRadius: 210,
    backgroundColor: 'red',
  },
});
