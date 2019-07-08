module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["standard", "plugin:vue/recommended", "plugin:jest/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {}
};
