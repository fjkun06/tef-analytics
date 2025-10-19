import js from "@eslint/js";
import tsparser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import pluginReact from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    // 👇 ESLint will ignore these folders entirely
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "coverage/**",
      "dist/**",
      "public/**",
      "next-env.d.ts",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js,
      "@typescript-eslint": tseslint,
      prettier: prettierPlugin,
      import: importPlugin,
      "react-hooks": reactHooksPlugin,
      react: pluginReact,
    },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      parser: tsparser,
      sourceType: "module",
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          printWidth: 90, // same width limit
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

      // // Line length
      // "max-len": [
      //   "error",
      //   {
      //     code: 90,
      //     ignoreUrls: true,
      //     ignoreStrings: false,
      //     ignoreRegExpLiterals: true,
      //   },
      // ],

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
  },
  // tseslint.configs.recommended,
  // pluginReact.configs.flat.recommended,
]);
