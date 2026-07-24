import globals from "globals";
import pluginJs from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    ignores: ["node_modules", "dist"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  pluginJs.configs.recommended,
  {
    files: [".eslintrc.{js,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        sourceType: "script",
      },
    },
  },
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      "prettier/prettier": "error",
    },
  },
];
