import { defineConfig, globalIgnores  } from 'eslint/config';
import tseslint from 'typescript-eslint';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import parserTs from '@typescript-eslint/parser';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';

export default defineConfig(
    globalIgnores([
        'node_modules/*',
        'build/*'
    ]),
    tseslint.configs.recommended,
    {
        plugins: {
            '@stylistic/ts': stylisticTs,
            'jsx-a11y': jsxA11y,
            'react': react
        },
        languageOptions: {
            parser: parserTs,
        },
        rules: {
            'indent': ['error', 4],
            'semi': 'error',
            'prefer-const': 'off',
            'quotes': ['error', 'single'],
            'jsx-a11y/aria-role': [
                2,
                {
                    allowedInvalidRoles: ['text'],
                    ignoreNonDOM: true,
                },
            ],
        },
    },
);
