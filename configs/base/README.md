# @muban/eslint-config [![npm version](https://badge.fury.io/js/%40muban%2Feslint-config.svg)](https://badge.fury.io/js/%40muban%2Feslint-config)

The official Muban eslint configurations.

This configuration uses the [Media.Monks eslint configuration](https://github.com/mediamonks/eslint-config) with some
small tweaks, together with the addition of [lit](https://www.npmjs.com/package/eslint-plugin-lit) and
[lit-a11y](https://www.npmjs.com/package/eslint-plugin-lit-a11y) plugins to support the Muban templates.


## Installation

The configuration has a number of peer dependencies that must be installed.

```bash
npm i --dev @muban/eslint-config
```

**Note for `yarn` users**: `yarn` does not install peer dependencies by default, this can be supplemented with `install-peerdeps`.

```bash
npx install-peerdeps --dev @muban/eslint-config
```

## Usage

Now you can add `@muban/eslint-config` to your `.eslintrc`. Adding `parserOptions.project` is only required if 
your project is using TypeScript.

```json5
{
  "extends": "@muban/eslint-config",
  "parserOptions": {
    "project": "./tsconfig.json" // can also be an array, if multiple `tsconfig.json` are present
  }
}

```
