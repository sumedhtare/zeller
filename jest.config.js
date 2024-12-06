module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest', // Transpile JS/TS files using Babel
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-vector-icons|@react-native|@testing-library)/)',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'], // Load custom Jest matchers
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
