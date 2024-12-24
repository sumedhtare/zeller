import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FormContainer from '../components/formContainer';
import InputText from '../components/inputText';
import Button from '../components/button';
import {useNavigation} from '@react-navigation/native';
import Animated, {FadeInDown} from 'react-native-reanimated';

export default function SignupScreen() {
  const navigation = useNavigation();
  const navigateLogin = () => {
    navigation.navigate('login');
  };
  return (
    <FormContainer>
      <View className="h-full w-full justify-around pt-40 pb-10">
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInDown.duration(1000).springify()}
            className="text-white font-bold tracking-wider text-5xl">
            SignUp
          </Animated.Text>
        </View>

        <View className="flex items-center mx-4 gap-y-4">
          <InputText placeholder="Email" placeholderTextColor="grey" />

          <InputText
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="grey"
          />

          <View className="w-full">
            <Button label="Login" />
          </View>

          <View className="flex-row jsutify-center">
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={navigateLogin}>
              <Text className="text-sky-600">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </FormContainer>
  );
}
