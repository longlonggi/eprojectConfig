{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
   "vetur.format.defaultFormatter.html": "prettier",
   "vetur.format.defaultFormatter.css": "prettier",
   "vetur.format.defaultFormatter.postcss": "prettier",
   "vetur.format.defaultFormatter.scss": "prettier",
   "vetur.format.defaultFormatter.less": "prettier",
   "vetur.format.defaultFormatter.stylus": "stylus-supremacy",
   "vetur.format.defaultFormatter.ts": "prettier",
   "vetur.format.defaultFormatter.sass": "sass-formatter",
   "vetur.format.defaultFormatter.js": "vscode-typescript",
   "javascript.format.semicolons": "remove",
   "javascript.format.insertSpaceBeforeFunctionParenthesis": false,
   "editor.codeActionsOnSave": {
     "source.fixAll": true
   },
   // 指定 *.vue 文件的格式化工具为vetur
   "[vue]": {
     "editor.defaultFormatter": "octref.vetur"
   },
   // 指定 *.js文件的格式化工具为vscode自带
   "[javascript]": {
     "editor.defaultFormatter": "vscode.typescript-language-features"
   },
   "vetur.format.defaultFormatterOptions": {
     "JS-beautify-HTML": {
       "wrap_attributes": "force-aligned"
     },
     "prettyhtml": {
       "printWidth": 120,
       "singleQuote": false,
       "wrapAttributes": false,
       "sortAttributes": true
     },
     "prettier": {
       "semi": false,
       "singleQuote": true,
       "eslintIntegration": true,
       "arrowParens": "always"
     }
   },
   "editor.detectIndentation": false,
   "editor.tabSize": 2,
   "editor.formatOnSave": true,
   "diffEditor.ignoreTrimWhitespace": false,
   "[html]": {
      "editor.defaultFormatter": "vscode.html-language-features"
   },
   "[json]": {
      "editor.defaultFormatter": "vscode.html-language-features"
   }
}
