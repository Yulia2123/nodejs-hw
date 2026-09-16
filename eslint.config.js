const js = require('@eslint/js');

module.exports = [
  {
    ignores: ['node_modules/**'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        process: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': [
        'error',
        {
          args: 'none',
        },
      ],
    },
  },
];
