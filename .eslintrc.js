module.exports = {
  root: true,
  ignorePatterns: ['setupTests.js'],
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
