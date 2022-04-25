# VSCODE CONFIG

配置完成后可根据eslint保存以后自动格式化代码,实现代码风格统一。

## VSCODE 插件
在扩展中装入下面4个插件
- Vuter
- Prettier
- Prettier ESlint
- ESlint

## VSCODE 配置
```
{
 "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "[javascript]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[typescript]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "vetur.format.defaultFormatter.html": "prettier",
  "vetur.format.defaultFormatter.js": "prettier-eslint",
  "files.eol": "\n",
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true
  },
  "editor.formatOnType": true,
}
```

打开VSCODE，点开设置，右上角切换成setting.json。将上面的数据粘贴到setting.json当中。有些同学可以有自己的风格，注意已经的有配置需要替换，如果觉得麻烦也可以直接全部黏贴，替换自己的配置。