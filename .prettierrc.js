module.exports = {
  semi: false,
  tabWidth: 2,
  printWidth: 120,
  singleQuote: true,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^components/(.*)$',
    '^(.*)/(?!generated)(.*)/(.*)$',
    '^(.*)/generated/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
}
