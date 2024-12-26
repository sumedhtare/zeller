import {View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from '../components/button';
import Animated, {FadeInUp} from 'react-native-reanimated';
import {getRoomColor, getRoomImage} from '../utils/resources';
import LinearGradient from 'react-native-linear-gradient';
const {height} = Dimensions.get('screen');

export default function RoomScreen() {
  const navigation = useNavigation();
  const {params}: any = useRoute();
  const {data} = params;
  const colors = getRoomColor(data);
  const image = getRoomImage(data);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <LinearGradient
        colors={colors.linear0}
        style={[styles.header]}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}>
        <Animated.View />

        <Animated.Image
          entering={FadeInUp.delay(200).duration(500).springify()}
          source={image}
          style={styles.image}
          resizeMode="contain"
        />
        <Animated.Text
          style={styles.title}
          entering={FadeInUp.delay(500).duration(500).springify()}>
          {data}
        </Animated.Text>
      </LinearGradient>
      <Button onPress={() => navigation.goBack()} label="Go back" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: '60%',
    width: '40%',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  title: {
    position: 'absolute',
    top: 50,
    left: 10,
    fontSize: 30,
  },
  header: {
    height: height * 0.25,
    width: '100%',
    overflow: 'hidden',
  },
});
