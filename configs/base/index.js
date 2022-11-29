const namingConventionOptions = [
  {
    selector: 'default',
    format: ['strictCamelCase'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'forbid',
  },
  {
    selector: ['typeLike', 'enumMember'],
    format: ['StrictPascalCase'],
    custom: {
      regex: '^[A-Z]{2}',
      match: false,
    },
    leadingUnderscore: 'forbid',
    trailingUnderscore: 'forbid',
  },
  {
    selector: 'variable',
    modifiers: ['exported'],
    format: ['strictCamelCase', 'StrictPascalCase'],
  },
]

module.exports = {
  extends: [
    '@mediamonks/eslint-config-typescript',
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
    // Changes
    '@typescript-eslint/naming-convention': [
      'error',
      ...namingConventionOptions,
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkShorthandImports: false,
        allowList: { fn: true },
        replacements: {
          ref: false,
          refs: false,
          params: false,
          param: false,
          props: false,
          prop: false,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*.stories.ts', '*.test.ts'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          ...namingConventionOptions,
          {
            selector: 'variable',
            // Exception for local (non-exported) FunctionComponents
            format: ['strictCamelCase', 'StrictPascalCase'],
          },
        ]
      },
    },
  ],
};
