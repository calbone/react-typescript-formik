module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    './node_modules/prettier-stylelint/config.js'
  ],
  plugins: ['stylelint-order'],
  processors: ['stylelint-processor-styled-components'],
  rules: {
    'declaration-empty-line-before': 'never',
    indentation: 2,
    'no-missing-end-of-source-newline': null,
    'string-quotes': 'single',
    'order/properties-alphabetical-order': true
  }
}
