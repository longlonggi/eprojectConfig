# eprojectConfig
工程配置
eslintrc.js= {
  root: true,
  env: {
    browser: true,
    e6: true,
    node: true
  }
  extends: ['plugin:vue/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  rules: {
    //最大参数个数
    "max-params: ["error", 5]
    // 强制文件的最大行数，已提高可维护性
    "max-lines": ["error", 900]
    // 强制函数最大行数
    "max--lines-per-function": ["error",50]
    // 强制可嵌套的最大深度
    "max-depth":["error",3]
    // 限制圈复杂度
    "complexity": ["error,7]
    "no-duplicate-imports": "error"
  }
}
prettierrc = {
  "eslintIntegration": true,
  "stylelintIntegration": true,
  "tabWidth": 2,
  "singleQuote": true,
  "semi": false
}
