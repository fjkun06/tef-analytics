// eslint.config.ts
import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

// Import only if you want custom object plugins (optional)
import tsPlugin from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js, TypeScript, React, Prettier, Storybook recommended configs
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "prettier",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "plugin:storybook/recommended",
      "next",
    ],
  }),

  {
    // Define environments
    languageOptions: {
      globals: {
        // browser globals
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        // node globals
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        // ECMAScript globals
        console: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
      },
      // parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    // Ignore build/output files
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"],

    // Plugins defined as objects
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "@typescript-eslint": tsPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
    },

    // Custom rules (professional team style)
    rules: {
      // Prettier enforcement
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          printWidth: 90,
          tabWidth: 2,
          semi: true,
          trailingComma: "none",
          bracketSpacing: true,
          jsxBracketSameLine: false,
          arrowParens: "always",
          endOfLine: "auto",
          ignoreTemplateLiterals: true,
        },
      ],

      // Indentation
      indent: [
        "error",
        2,
        {
          SwitchCase: 1,
          flatTernaryExpressions: true,
          offsetTernaryExpressions: true,
        },
      ],

      // Quotes & semicolons
      quotes: ["error", "double"],
      semi: ["error", "always"],

      // Disable prop-types in TS
      "react/prop-types": "off",

      // TypeScript: allow `any` where really needed
      "@typescript-eslint/no-explicit-any": "off",

      // Line length
      "max-len": [
        "error",
        {
          code: 90,
          ignoreUrls: true,
          ignoreStrings: false,
          ignoreRegExpLiterals: true,
        },
      ],

      // Import order (professional style)
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal"],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      // React 18+ no need for React in scope
      "react/react-in-jsx-scope": "off",

      // Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },

    // React settings
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

export default eslintConfig;
