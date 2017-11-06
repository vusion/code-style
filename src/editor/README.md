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
