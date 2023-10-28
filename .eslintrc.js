module.exports = {
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "never"],
  },
}
