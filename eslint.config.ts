import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import storybookPlugin from 'eslint-plugin-storybook';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  // reactHooksPlugin.configs ['recommended-latest'],
  // storybookPlugin.configs['recommended-latest'],
  // reactPlugin.configs.flat['jsx-runtime'],
  // { browser: true, es2020: true },
  {
    ignores: ['dist', 'build', 'storybook-static'],
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-unused-expressions': 0,
      '@typescript-eslint/no-unused-vars': 0,
      'no-trailing-spaces': ['error', { skipBlankLines: true }],
      'react/prop-types': 0,
      'indent': ['error', 2, { SwitchCase: 1, flatTernaryExpressions: true }],
      'linebreak-style': 1,
      'max-lines': ['error', 200],
      'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    }
  }
);
