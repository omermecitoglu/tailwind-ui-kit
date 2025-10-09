import omer from "@omer-x/eslint-config";

export default [
  ...omer,
  {
    rules: {
      "react/jsx-no-literals": "off",
      "jsx-a11y/media-has-caption": "off",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: [
          "./tsconfig.app.json",
          "./tsconfig.node.json",
        ],
      },
    },
  },
  {
    ignores: ["public/*"],
  },
];
