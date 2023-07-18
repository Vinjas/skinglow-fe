module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'object-shorthand': ['error', 'always', { avoidQuotes: false }],
    'object-curly-spacing': ['error', 'always'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/no-unstable-nested-components': 'off',
    'react-native/no-inline-styles': 'off'
  }
};
