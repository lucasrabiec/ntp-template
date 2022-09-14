module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-cycle': ['error', { ignoreExternal: true }],
    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        pathGroupsExcludedImportTypes: [],
      },
    ],
  },
};
