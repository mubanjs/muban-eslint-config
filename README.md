# Muban - Eslint Configuration

The official Muban eslint configurations.

This configuration uses the [Media.Monks eslint configuration](https://github.com/mediamonks/eslint-config) with some
small tweaks, together with the addition of [lit](https://www.npmjs.com/package/eslint-plugin-lit) and
[lit-a11y](https://www.npmjs.com/package/eslint-plugin-lit-a11y) plugins to support the Muban templates.

| configuration                                                                               |                                                                                                                                                  |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [base](https://github.com/muban/muban-eslint-config/tree/main/configs/eslint-config)   | [![npm version](https://badge.fury.io/js/%40muban%2Feslint-config.svg)](https://badge.fury.io/js/%40muban%2Feslint-config)   |

## Installation

The configuration has a number of peer dependencies that must be installed.

```bash
npm i --dev @muban/eslint-config
```

> **Note for `yarn` users**: See the [package readme](https://github.com/muban/muban-eslint-config/tree/main/configs/eslint-config).

## Usage

Now you can add `@muban/eslint-config` to your `package.json`.


```json
{
  "eslintConfig": {
    "extends": "@muban/eslint-config",
    "parserOptions": {
      "project": "./tsconfig.json"
    }
  }
}
```

> Adding `parserOptions.project` is only required if your project is using TypeScript.
