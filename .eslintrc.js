'use strict';

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
      ],
    },
  },
  plugins: ['ember', '@typescript-eslint', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
  },
  rules: {
    'no-else-return': 'error',
    'no-console': 'warn',
    'unused-imports/no-unused-imports': 'error',
    'ember/no-controllers': 'error',
    'ember/require-fetch-import': 'error',
    'ember/route-path-style': 'error',
    'ember/no-current-route-name': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
  },
  overrides: [
    // node files
    {
      files: [
        './.formconfig.js',
        './lighthouserc.js',
        './.eslintrc.js',
        './index.js',
        'tests/dummy/config/ember-try.js',
        'tests/dummy/config/environment.js',
        'tests/dummy/config/targets.js',
        './with-backend.js',
        './read-cov.js',
        './app/tailwind/tailwind.config.js',
        './.prettierrc.js',
        './.stylelintrc.js',
        './.template-lintrc.js',
        './ember-cli-build.js',
        './testem.js',
        './blueprints/*/index.js',
        './config/**/*.js',
        './lib/*/index.js',
        './server/**/*.js',
        'node-tests/**/*.js',
      ],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
        jest: true,
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
      rules: {
        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off',
        'use-ember-data-rfc-395-imports': 'off',
      },
    },
    {
      // test files
      files: ['tests/**/*-test.{js,ts}'],
      extends: ['plugin:qunit/recommended'],
    },
  ],
};
