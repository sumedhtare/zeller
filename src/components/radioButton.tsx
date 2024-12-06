import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type RadioButtonType = {
  title: string;
  checked: boolean;
  onPress?: () => void;
};

const RadioButton = ({title, checked, onPress}: RadioButtonType) => {
  return (
    <TouchableOpacity
      style={[
        styles.radioContainer,
        {backgroundColor: checked ? '#E8F2FB' : 'transparent'},
      ]}
      onPress={onPress}>
      <Icon
        name={checked ? 'radio-button-on-outline' : 'radio-button-off-outline'}
        size={24}
        color={checked ? '#0370CE' : 'black'}
      />
      {title && <Text style={styles.title}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  radioContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
});
