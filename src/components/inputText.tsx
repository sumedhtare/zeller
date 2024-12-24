import {View, TextInput, TextInputProps} from 'react-native';
import React from 'react';

interface CustomTextInputProps extends TextInputProps {
  containerClass?: string;
}

export default function InputText({
  containerClass = '',
  ...props
}: CustomTextInputProps) {
  return (
    <View
      className={`bg-black/5 px-5 rounded-2xl w-full h-[50] flex justify-center ${containerClass}`}>
      <TextInput placeholderTextColor="grey" {...props} />
    </View>
  );
}
