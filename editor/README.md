# 编辑器配置

## 基本规则

- 使用utf-8编码
- 使用unix换行符
- 使用space缩进
- 缩进空格长度为4
- 避免行尾有空格
- 文件结束必须有空行

## Windows的Git配置！

检出时最好不要转换回车换行：

``` bash
git config --global core.autocrlf input
```

## 各编辑器配置
### VSCode

``` json
{
    "files.trimTrailingWhitespace": true,
    "files.insertFinalNewline": true,
    "eslint.enable": true,
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        { "language": "vue", "autoFix": true }
    ],
}
```

其他属性已默认配好。

### Atom

在Preferences中设置`Tab Length`为4，其他设置在Whitespace包中已默认配好。

### Sublime

``` json
{
    "tab_size": 4,
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": true,
    "ensure_newline_at_eof_on_save": true,
}
```
