import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import prettier from "eslint-plugin-prettier";
import nextPlugin from "@next/eslint-plugin-next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "build/**",
      "coverage/**",
      "dist/**",
      "next-env.d.ts",
    ],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      prettier,
      "@next/next": nextPlugin,
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "prettier/prettier": ["error", { printWidth: 120 }],
    },
  },
];
