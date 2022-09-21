module.exports = {
  extends: [
    'plugin:tailwindcss/recommended',
    'plugin:@next/next/recommended',
    'airbnb',
    'airbnb/hooks',
    '../.eslintrc.js',
  ],
  plugins: ['tailwindcss'],
  settings: {
    tailwindcss: {
      callees: ['cx'],
    },
  },
  rules: {
    'tailwindcss/classnames-order': 'error',
    'tailwindcss/enforces-negative-arbitrary-values': 'error',
    'tailwindcss/enforces-shorthand': 'error',
    'tailwindcss/migration-from-tailwind-2': 'error',
    'tailwindcss/no-arbitrary-value': 'off',
    'tailwindcss/no-custom-classname': 'error',
    'tailwindcss/no-contradicting-classname': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
  },
};
