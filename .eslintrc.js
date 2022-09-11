module.exports = {
    env: {
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: "module",
    },
    plugins: ["prettier", "react", "@typescript-eslint"],
    rules: {
        "react/react-in-jsx-scope": "off",
    },
}
