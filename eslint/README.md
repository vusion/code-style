# Vusion ESLint Config

## 配置
``` shell
npm install --save-dev eslint eslint-config-vusion
```

然后创建`.eslintrc`文件：

### 仅配置 JS

``` json
{
    "extends": "vusion",
    "env": {
        "browser": true,
        "node": true
    }
}
```

### 额外增加 Vue 的配置

``` json
{
    "extends": "vusion/vue",
    "env": {
        "browser": true
    }
}
```

### 包含测试和 Vue 的环境

``` json
{
    "extends": "vusion/all",
    "env": {
        "browser": true
    }
}
```

## 编辑器配置

### VSCode

如果要使用 Vue 相关的配置，需要配以下内容：

```json
"eslint.enable": true,
"eslint.autoFixOnSave": true,
"eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "html", "autoFix": true },
    { "language": "vue", "autoFix": true }
],
```

其它复杂情况可以参考[ESLint配置](http://eslint.cn/docs/user-guide/configuring)。

## 代码风格

- [JavaScript Style](JavaScript.md)
- [Vue Style](Vue.md)
