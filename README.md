# Vusion Style Guide

- [Editor Config](src/editor/README.md)
- [ESLint Config](src/eslint/README.md)
    - [JavaScript Style](src/eslint/JavaScript.md)
    - [Vue Style](src/eslint/Vue.md)
- [CSS Style](src/stylelint/README.md)

## 目录介绍
### src
- editor: 编辑器相关配置
- eslint: 基本JavaScript配置和针对vue的配置
- stylelint: css配置

#### test
eslint和stylelint检查的测试文件

## 使用说明
- 在code-style根目录下运行`npm run install`安装eslint和stylelint相关的依赖包
- 在code-style根目录下运行`npm run alllint`使用code-style/src/eslint/.eslintrc的配置和code-style/src/stylelint/.stylelintrc的配置分别检查code-style/test目录下的js和css规范
- 在code-style根目录下运行`npm run eslint`或者在code-style/src/eslint目录中运行`npm run test`，使用code-style/src/eslint/.eslintrc的配置检查code-style/test目录下的js规范。
- 在code-style根目录下运行`npm run stylelint`或者在code-style/src/stylelint目录中运行`npm run test`，使用code-style/src/stylelint/.stylelintrc的配置检查code-style/test目录下的css规范
