module.exports = {
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'es5',
  arrowParens: 'always',
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@(pages|components|utils|services|hooks)/',
    '^../',
    '^./',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
