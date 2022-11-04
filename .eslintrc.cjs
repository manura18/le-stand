/** @type {import('eslint').Linter.Config} */
module.exports = {
  settings: {
    'vue-i18n': {
      localeDir: './src/shared/lib/i18n/locales/*.{json,json5,yaml,yml}',
    },
    'tailwindcss': {
      callees: ['tw'],
      whitelist: ['^f-[a-zA-Z-__]+'],
    },
  },
  extends: [
    '@antfu',
    'plugin:tailwindcss/recommended',
    'plugin:@intlify/vue-i18n/recommended',
    'plugin:storybook/recommended',
    './.eslintrc-auto-import.json',
  ],
  plugins: ['tailwindcss', 'react'],
  overrides: [
    {
      files: ['*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
    },
  ],
  rules: {
    'curly': 'off',
    'arrow-parens': ['error', 'always'],
    'max-len': ['error', { ignoreStrings: true }],
    'import/order': [
      'warn',
      { groups: ['builtin', 'external'], warnOnUnassignedImports: true },
    ],

    // typescript-eslint
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',

    // eslint-plugin-vue
    'vue/component-name-in-template-casing': [
      'warn',
      'PascalCase',
      { registeredComponentsOnly: false },
    ],
    'vue/block-lang': ['error', { script: { lang: 'ts' } }],
    'vue/component-api-style': ['error', ['script-setup', 'composition']],
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-restricted-call-after-await': 'error',
    'vue/multi-word-component-names': ['error'],
    'vue/no-ref-object-destructure': ['error'],
    'vue/no-undef-components': ['error', {
      ignorePatterns: ['(F|H)[A-Z]+', 'RouterLink'],
    }],
    'vue/define-macros-order': 'off',
    'vue/define-props-declaration': ['error'],
    'vue/define-emits-declaration': ['error'],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3,
      },
      multiline: {
        max: 1,
      },
    }],

    // eslint-plugin-react
    'react/jsx-boolean-value': 'error',
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-spacing': 'error',
    'react/jsx-curly-newline': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': 'error',
    'react/jsx-key': 'error',
    'react/jsx-max-depth': 'error',
    'react/jsx-max-props-per-line': 'error',
    'react/jsx-newline': 'error',
    'react/jsx-no-bind': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-leaked-render': 'error',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': ['error', { allow: 'literal' }],
    'react/jsx-no-undef': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-fragments': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-sort-default-props': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-tag-spacing': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'error',

    // @intlify/vue-i18n
    '@intlify/vue-i18n/no-duplicate-keys-in-locale': 'error',
    '@intlify/vue-i18n/no-dynamic-keys': 'error',
    '@intlify/vue-i18n/no-missing-keys-in-other-locales': 'error',
    '@intlify/vue-i18n/no-unknown-locale': 'error',
    '@intlify/vue-i18n/no-unused-keys': ['error', {
      extensions: ['.js', '.vue', '.ts', '.tsx'],
    }],
    '@intlify/vue-i18n/no-raw-text': ['warn', {
      ignorePattern: '^[-#:()&*]+$',
    }],
  },
}
