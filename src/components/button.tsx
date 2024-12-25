import {TouchableOpacity, TouchableOpacityProps, Text} from 'react-native';
import React from 'react';

interface CustomButtonProps extends TouchableOpacityProps {
  containerClass?: string;
  textClass?: string;
  label: string;
}

export default function Button({
  containerClass = '',
  textClass = '',
  label,
  ...props
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      className={`"w-full bg-sky-500 rounded-2xl mb-3 h-[50] flex justify-center ${containerClass}`}
      {...props}>
      <Text className={`text-xl font-bold text-white text-center ${textClass}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
