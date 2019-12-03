module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
    warnOnUnsupportedTypeScriptVersion: false
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", "jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    // eslint
    "no-console": ["error", { allow: ["warn", "error"] }],
    // @typescript-eslint
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    // react
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: ["jsx", "tsx"]
      }
    ],
    "react/jsx-one-expression-per-line": "off",
    // react hooks
    "react-hooks/rules-of-hooks": "error"
  }
};
