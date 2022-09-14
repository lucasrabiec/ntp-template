module.exports = {
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['<THIRD_PARTY_MODULES>', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};
