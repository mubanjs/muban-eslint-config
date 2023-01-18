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

const jsRuleChanges = {
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
}

module.exports = {
  extends: [
    'plugin:lit/recommended',
    'plugin:lit-a11y/recommended',
  ],
  rules: {
    'lit/no-legacy-template-syntax': 'off',
    'lit/no-private-properties': 'off',
    'lit/no-property-change-update': 'off',
    'lit/no-template-map': 'off',
    'lit/binding-positions': 'off',
    'lit/no-invalid-html': 'off',
  },
  overrides: [
    {
      files: ['*.js'],
      extends: [
        '@mediamonks/eslint-config'
      ],
      rules: {
        ...jsRuleChanges,
      },
    },
    {
      files: ['*.ts'],
      extends: [
        '@mediamonks/eslint-config',
        '@mediamonks/eslint-config-typescript'
      ],
      rules: {
        ...jsRuleChanges,
        '@typescript-eslint/consistent-type-imports': ['error'],
        '@typescript-eslint/naming-convention': [
          'error',
          ...namingConventionOptions,
        ],
      }
    },
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
