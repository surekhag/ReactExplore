module.exports = {
  extends: [
    '@oracle-commerce',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  rules: {
    'spellcheck/spell-checker': 0,
    'react/prop-types': 0,
    'no-console': 1,
    'jsx-a11y/no-onchange': 0,
    'sort-imports': 0,
    'react/display-name': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ]
  },
  plugins: ['react', 'import', 'jsx-a11y'],
  parserOptions: {
    ecmaVersion: 2019
  },
  env: {
    browser: true,
    jest: true,
    node: true
  }
};
