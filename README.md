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
vue.config.js = {
  publicPath: '/',
  outputDir: 'dist',
  assetDir: 'assets',
  runtimeCompiler: false,
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {},
    modules: false
  },
  devServer: {
    open: true,
    host: 'localshot',
    proxy: {
          '/api': {
                target: 'http://localhost:8880',
                changeOrigin: true,
                secure: false,
                // ws: true,
                pathRewrite: {
                    '^/api': '/static/mock'   // 请求数据路径别名,这里是注意将static/mock放入public文件夹
                }
          }
   }
}
setting.json = {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "vetur.format.defaultFormatter.html": "prettyhtml",
  "vetur.format.defaultFormatter.css": "prettier",
  "vetur.format.defaultFormatter.postcss": "prettier",
  "vetur.format.defaultFormatter.scss": "prettier",
  "vetur.format.defaultFormatter.less": "prettier",
  "vetur.format.defaultFormatter.stylus": "stylus-supremacy",
  "vetur.format.defaultFormatter.js": "prettier",
  "vetur.format.defaultFormatter.ts": "prettier",
  "vetur.format.defaultFormatter.sass": "sass-formatter",
  "vetur.format.options.tabSize": 2,
  "vetur.format.options.useTabs": false,
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
        // js-beautify-html settings here
    }
  },
  "html.format.enable": false,
"json.format.enable": false,
"javascript.format.enable": false,
"typescript.format.enable": false,
"vetur.format.defaultFormatterOptions": {
  "prettier": {
    "trailingComma": "es5", // 多行时，尽可能打印尾随的逗号
    "tabWidth": 4, // 会忽略vetur的tabSize配置
    "useTabs": false, // 是否利用tab替代空格
    "semi": true, // 句尾是否加;
    "singleQuote": true, // 使用单引号而不是双引号
    "arrowParens": "avoid", // allow paren-less arrow functions 箭头函数的参数使用圆括号
    }
  }
}
