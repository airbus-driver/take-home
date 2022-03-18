module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'linebreak-style': 0,
    'react/prop-types': 0,
    'no-unused-vars': 'warn',
    'max-len': 0,
    'arrow-parens': 0,
    'object-curly-newline': 0,
    'arrow-body-style': 0,
    indent: ['warn', 2],
  },
};
