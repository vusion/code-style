# Vusion ESLint Config

## 配置
``` shell
npm install --save-dev eslint eslint-config-vusion
```

然后创建`.eslintrc`文件：

### 仅配置JS

``` json
{
    "extends": "vusion",
    "env": {
        "browser": true,
        "node": true
    }
}
```

### 额外增加Vue的配置

``` json
{
    "extends": "vusion/vue",
    "env": {
        "browser": true
    }
}
```

### 包含测试和Vue的环境

``` json
{
    "extends": "vusion/all",
    "env": {
        "browser": true
    }
}
```

其它复杂情况可以参考[ESLint配置](http://eslint.cn/docs/user-guide/configuring)。

## 代码风格

- [JavaScript Style](JavaScript.md)
- [Vue Style](Vue.md)
