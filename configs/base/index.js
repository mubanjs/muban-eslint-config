module.exports = {
  extends: [
    '@mediamonks/eslint-config-base',
    'plugin:lit/recommended',
    'plugin:lit-a11y/recommended',
  ],
  rules: {
    // Additions
    '@typescript-eslint/consistent-type-imports': ['error'],
    'lit/no-legacy-template-syntax': 'off',
    'lit/no-private-properties': 'off',
    'lit/no-property-change-update': 'off',
    'lit/no-template-map': 'off',
    'lit/binding-positions': 'off',
    'lit/no-invalid-html': 'off',
  },
  overrides: [
    {
      files: ['*.stories.ts', '*.test.ts'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'default',
            format: ['strictCamelCase'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'objectLiteralProperty',
            modifiers: ['requiresQuotes'],
            format: null,
          },
          {
            selector: 'typeLike',
            format: ['StrictPascalCase'],
          },
          {
            selector: 'variable',
            // Exception for FunctionComponents
            format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'variable',
            modifiers: ['exported'],
            format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'enumMember',
            format: ['StrictPascalCase'],
          },
        ],
      },
    },
  ],
};
