let count = 0;

count++;

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  globals: {
    document: true,
    window: true,
    $: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/standard',
    'prettier/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', , 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  settings: {
    'import/resolver': {},
    react: {
      version: 'detect',
    },
  },
};
