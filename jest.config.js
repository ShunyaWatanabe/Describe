module.exports = {
  preset: 'jest-expo',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  // this could solve the error: Jest encountered an unexpected token
  // transformIgnorePatterns: [
  //   "node_modules/(?!(jest-)?react-native|unimodules-permissions-interface|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)"
  // ]
};
