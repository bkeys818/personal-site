import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginAstro from 'eslint-plugin-astro'

// @ts-check
export default tseslint.config(
  {
    ignores: [
      '**/dist/',
      '**/.astro/',
      '**/node_modules/',
      '**/npm-debug.log*',
      '**/yarn-debug.log*',
      '**/yarn-error.log*',
      '**/pnpm-debug.log*',
      '**/.env',
      '**/.env.production',
      '**/.DS_Store',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.cjs'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'commonjs',
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
)
