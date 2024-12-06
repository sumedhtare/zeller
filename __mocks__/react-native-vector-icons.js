const React = require('react');
const { Text } = require('react-native');

// Mock implementation for the Icon component
const Icon = ({ name, size, color, ...props }) => {
  return React.createElement(Text, { ...props }, `${name} (${size}, ${color})`);
};

module.exports = {
  createIconSet: () => Icon,
  createIconSetFromFontello: () => Icon,
  createIconSetFromIcoMoon: () => Icon,
  createMultiStyleIconSet: () => Icon,
  createAnimatedIconSet: () => Icon,
  createCustomizableIconSet: () => Icon,
  Icon,
};
