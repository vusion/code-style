# 编辑器配置

## 规则

- 使用space缩进
- 缩进空格长度为4
- 避免行尾有空格
- 文件结束必须有空行

## 各编辑器配置
### VSCode

``` json
{
    "files.trimTrailingWhitespace": true,
    "files.insertFinalNewline": true,
}
```

### Sublime

``` json
{
    "tab_size": 4,
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": true,
    "ensure_newline_at_eof_on_save": true,
}
```
## stylelint在VSCode中配置
使用插件[vscode-stylelint](https://github.com/shinnn/vscode-stylelint/)
该插件默认按照[该规则](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md#configuration)作为检查的配置文件。
``` json
    // stylelint配置
    "stylelint.enable": true, // 开启stylelint的配置
    "css.validate": false,
    "scss.validate": false,
    "stylelint.config": { // 设置"stylelint.config"属性为绝对路径，统一所有css样式的风格。
        "extends": "E:/code-style/src/stylelint/.stylelintrc"
    },
    "stylelint.additionalDocumentSelectors":[  // 对html和vue文件也进行检查。
        "html",
        "vue"
    ]
```

## eslint在VSCode中配置
- npm install -g eslint eslint-plugin-vue eslint-config-vue
- vscode中配置

``` json
"javascript.validate.enable" : false,
    "eslint.options": {
        "configFile": "E:/code-style/src/eslint/.eslintrc",
        "plugins": ["vue"]
    },
    "eslint.validate": [ // 检查js, html vue代码
        "javascript",
        "html",
        "vue"
    ]
```
