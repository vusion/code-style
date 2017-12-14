# CSS Code Style
## 配置
使用[stylelint](https://github.com/stylelint/stylelint)

创建`.stylelintrc`文件，内容如下：

``` json
{
  "extends": "stylelint-config-recommended"
}

```
该配置使用stylelint-config-recommended规则。

## VSCode

使用插件[vscode-stylelint](https://github.com/shinnn/vscode-stylelint/)

``` json
    // stylelint配置
    "stylelint.enable": true, // 开启stylelint的配置
    "css.validate": false,
    "scss.validate": false,
    "stylelint.additionalDocumentSelectors":[  // 对html和vue文件也进行检查
        "html",
        "vue"
    ]
```

该插件默认按照[该规则](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configuration.md#configuration)作为检查的配置文件。


> 说明：
> - 🔧表示可以使用--fix自动修复。

## 目录
- [选择器](#选择器)
- [属性声明](#属性声明)
- [属性值规范](#属性值规范)
- [缩进](#缩进)
- [大小写](#大小写)
- [其他](#其他)

## 选择器

#### 禁止未知的媒体查询名
[media-feature-name-no-unknown](https://github.com/stylelint/stylelint/blob/master/lib/rules/media-feature-name-no-unknown/README.md)

``` css
// ✗ bad
@media screen and (unknown) {}

// ✓ good
@media (min-width: 700px) {}
```

#### 禁止非法的@规则
[at-rule-no-unknown](https://github.com/stylelint/stylelint/blob/master/lib/rules/at-rule-no-unknown/README.md)

``` css
// ✗ bad
@unknow {}

// ✓ good
@charset "UTF-8"
@media (max-width: 960px) {}
```

#### 禁止未知的伪类选择器
[selector-pseudo-class-no-unknown](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-pseudo-class-no-unknown/README.md)

``` css
// ✗ bad
a:hoverr {}

// ✓ good
a:hover {}
```

#### 禁止未知的伪元素选择器
[selector-pseudo-element-no-unknown](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-pseudo-element-no-unknown/README.md)

``` css
// ✗ bad
a::element {}

// ✓ good
a::before {}
```

#### 禁止未知的属性
[selector-type-no-unknown](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-type-no-unknown/README.md)

``` css
// ✗ bad
tag {}

// ✓ good
input {}
```

#### 属性选择器中的属性值不添加冒号
[selector-attribute-quotes](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-attribute-quotes/README.md)

``` css
// ✗ bad
[title] {}
[target="_blank"] {}
[class|="top"] {}
[title~='text'] {}
[data-attribute='component'] {}

// ✓ good
[title=flower] {}
[class^=top] {}
```

## 属性声明

#### 禁止属性重复声明（允许连续且值不同的属性重复声明）
[declaration-block-no-duplicate-properties](https://github.com/stylelint/stylelint/blob/master/lib/rules/declaration-block-no-duplicate-properties/README.md)

``` css
// ✗ bad
a { color: pink; color: orange; }
p {
  font-size: 16px;
  font-weight: 400;
  font-size: 1rem;
}

// ✓ good
a { color: pink; }
p {
  font-size: 16px;
  font-size: 1rem;
  font-weight: 400;
}
```

#### 禁止可以合成的属性展开
[declaration-block-no-redundant-longhand-properties](https://github.com/stylelint/stylelint/blob/master/lib/rules/declaration-block-no-redundant-longhand-properties/README.md)

``` css
// ✗ bad
a {
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
}

// ✓ good
a {
  padding: 1px 2px 3px 4px;
}
a {
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 10px;
}
```

#### 禁止简写属性覆盖普通写法的属性
[declaration-block-no-shorthand-property-overrides](https://github.com/stylelint/stylelint/blob/master/lib/rules/declaration-block-no-shorthand-property-overrides/README.md)

``` css
// ✗ bad
a {
  padding-left: 10px;
  padding: 20px;
}

// ✓ good
a {
  padding: 20px;
  padding-left: 10px;
}
```

#### 禁止简写属性中有冗余的值
[shorthand-property-no-redundant-values](https://github.com/stylelint/stylelint/blob/master/lib/rules/shorthand-property-no-redundant-values/README.md)

``` css
// ✗ bad
a { margin: 1px 1px; }

// ✓ good
a { margin: 1px; }
```

#### 禁止未知的属性名
[property-no-unknown](https://github.com/stylelint/stylelint/blob/master/lib/rules/property-no-unknown/README.md)

``` css
// ✗ bad
a {
  colr: blue;
}

// ✓ good
a {
  color: blue;
}
```

## 属性值规范

#### 禁止重复字体属性
[font-family-no-duplicate-names](https://github.com/stylelint/stylelint/blob/master/lib/rules/font-family-no-duplicate-names/README.md)

``` css
// ✗ bad
a { font-family: 'Times', Times, serif; }

// ✓ good
a { font-family: Times, serif; }
```

#### 禁止不规范的单位
[unit-no-unknown](https://github.com/stylelint/stylelint/blob/master/lib/rules/unit-no-unknown/README.md)

``` css
// ✗ bad
a {
  width: 10pixels;
}

// ✓ good
a {
  width: 10px;
}
```

#### 禁止浏览器引擎前缀
[value-no-vendor-prefix](https://github.com/stylelint/stylelint/blob/master/lib/rules/value-no-vendor-prefix/README.md)

``` css
// ✗ bad
a { display: -webkit-flex; }

// ✓ good
a { display: flex; }
```
#### 禁止!important
[declaration-no-important](https://github.com/stylelint/stylelint/blob/master/lib/rules/declaration-no-important/README.md)

``` css
// ✗ bad
a { color: pink !important; }

// ✓ good
a { color: pink; }
```
#### 禁止尾随零
[number-no-trailing-zeros](https://github.com/stylelint/stylelint/blob/master/lib/rules/number-no-trailing-zeros/README.md)

``` css
// ✗ bad
a { top: 1.0px }

// ✓ good
a { top: 1px }
```

#### 禁止前导零
[number-leading-zero](https://github.com/stylelint/stylelint/blob/master/lib/rules/number-leading-zero/README.md)

``` css
// ✗ bad
a { font-size: 0.3rem; }

// ✓ good
a { font-size: .3rem; }
```
#### 禁止color属性值为不合法的十六进制
[color-no-invalid-hex](https://github.com/stylelint/stylelint/blob/master/lib/rules/color-no-invalid-hex/README.md)

``` css
// ✗ bad
a { color: #y3 }

// ✓ good
a { color: #000; }
```
#### calc函数中操作符两边必须有空格
[function-calc-no-unspaced-operator](https://github.com/stylelint/stylelint/blob/master/lib/rules/function-calc-no-unspaced-operator/README.md)

``` css
// ✗ bad
a { top: calc(1px+2px); }

// ✓ good
a { top: calc(1px + 2px); }
```
#### `linear-gradient()`中的方向属性值必须符合[标准语法](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient#Syntax)
[function-linear-gradient-no-nonstandard-direction](https://github.com/stylelint/stylelint/blob/master/lib/rules/function-linear-gradient-no-nonstandard-direction/README.md)

``` css
// ✗ bad
.foo { background: linear-gradient(top, #fff, #000); }
.foo { background: linear-gradient(45, #fff, #000); }
.foo { background: linear-gradient(to top top, #fff, #000); }

// ✓ good
.foo { background: linear-gradient(to top, #fff, #000); }
.foo { background: linear-gradient(45deg, #fff, #000); }
.foo { background: linear-gradient(1.57rad, #fff, #000); }
```
#### 禁止字符串换行
[string-no-newline](https://github.com/stylelint/stylelint/blob/master/lib/rules/string-no-newline/README.md)

``` css
// ✗ bad
a {
  content: "first
    second";
}

// ✓ good
a {
  content: "first\\nsecond";
}
```

## 缩进

#### 缩进为四个空格 🔧
[indentation](https://github.com/stylelint/stylelint/blob/master/lib/rules/indentation/README.md)

``` css
// ✗ bad
a{
color:#fff;
}

// ✓ good
a{
    color:#fff;
}
```

#### 整行注释前必须有空行 🔧
[comment-empty-line-before](https://github.com/stylelint/stylelint/blob/master/lib/rules/comment-empty-line-before/README.md)

``` css
// ✗ bad
a {}
/* comment */

// ✓ good
a {}

/* comment */

a {} /* comment */
```

#### 每块样式定义之间禁止空行 🔧
[rule-empty-line-before](https://github.com/stylelint/stylelint/blob/master/lib/rules/rule-empty-line-before/README.md)

``` css
// ✗ bad
a {}

b {}

// ✓ good
a {}
b {}
```

#### 选择器与`{`之间需要空格
[block-opening-brace-space-before](https://github.com/stylelint/stylelint/blob/master/lib/rules/block-opening-brace-space-before/README.md)


``` css
// ✗ bad
a{ color: pink; }
a
{ color: pink; }

// ✓ good
a { color: pink; }
```
#### 禁止属性选择器中的空格
[selector-attribute-brackets-space-inside](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-attribute-brackets-space-inside/README.md), [selector-attribute-operator-space-after](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-attribute-operator-space-after/README.md), [selector-attribute-operator-space-before](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-attribute-operator-space-before/README.md) 

``` css
// ✗ bad
[ target] {}
[target ] {}
[ target =_blank] {}
[target=_blank ] {}

// ✓ good
[target] {}
[target=_blank] {}
```
#### 伪类括号内禁止空格
[selector-pseudo-class-parentheses-space-inside](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-pseudo-class-parentheses-space-inside/README.md)

``` css
// ✗ bad
input:not( [type="submit"] ) {}
input:not( [type="submit"]) {}

// ✓ good
input:not([type="submit"]) {}
```

#### 选择器之间必须有空格
[selector-combinator-space-after](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-combinator-space-after/README.md), [selector-combinator-space-before](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-combinator-space-before/README.md), [selector-descendant-combinator-no-non-space](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-descendant-combinator-no-non-space/README.md)

``` css
// ✗ bad
a +b { color: pink; }
a>b { color: pink; }

// ✓ good
a + b { color: pink; }
a> b { color: pink; }
.foo .bar {}
```

#### 多行选择器逗号后不允许空白符
[selector-list-comma-newline-after](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-list-comma-newline-after/README.md)

``` css
// ✗ bad
a
, b { color: pink; }

a,
b { color: pink; }

// ✓ good
a,b { color: pink; }

a
,b { color: pink; }

```

## 大小写
#### @标签小写 🔧
[at-rule-name-case](https://github.com/stylelint/stylelint/blob/master/lib/rules/at-rule-name-case/README.md)

``` css
// ✗ bad
@Charset 'UTF-8';

// ✓ good
@charset 'UTF-8';
```
#### 属性名小写
[property-case](https://github.com/stylelint/stylelint/blob/master/lib/rules/property-case/README.md)

``` css
// ✗ bad
a {
  Width: 1px;
}

// ✓ good
a {
  width: 1px;
}
```
#### 单位小写
[unit-case](https://github.com/stylelint/stylelint/blob/master/lib/rules/unit-case/README.md)

``` css
// ✗ bad
a {
  width: 1PX;
}

// ✓ good
a {
  width: 1px;
}
```
#### 属性值小写
[value-keyword-case](https://github.com/stylelint/stylelint/blob/master/lib/rules/value-keyword-case/README.md)

``` css
// ✗ bad
a {
  display: BLOCK;
}

// ✓ good
a {
  display: block;
}
```
#### 伪元素小写
[selector-pseudo-element-case](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-pseudo-element-case/README.md)

``` css
// ✗ bad
a::BEFORE {}

// ✓ good
a::before {}
```
#### 伪类小写
[selector-pseudo-class-case](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-pseudo-class-case/README.md)
``` css
// ✗ bad
a:Hover {}
a:HOVER {}
:ROOT {}

// ✓ good
a:hover {}
:root {}
```
#### 属性名小写
[selector-type-case](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-type-case/README.md)

``` css
// ✗ bad
A {}
LI {}

// ✓ good
a {}
li {}
```

## 其他

#### 禁止空块
[block-no-empty](https://github.com/stylelint/stylelint/blob/master/lib/rules/block-no-empty/README.md)

不允许出现空块

``` css
// ✗ bad
a { }

// ✓ good
a { color: pink; }
```

#### 禁止空注释
[comment-no-empty](https://github.com/stylelint/stylelint/blob/master/lib/rules/comment-no-empty/README.md)

``` css
// ✗ bad
/**/
/* */
/*

 */

// ✓ good
/* comment */
/*
 * Multi-line Comment
**/
```

#### 禁止空文件
[no-empty-source](https://github.com/stylelint/stylelint/blob/master/lib/rules/no-empty-source/README.md)

``` css
// ✗ bad
\t\t

// ✓ good
a {}
```

#### 禁止多余的分号
[no-extra-semicolons](https://github.com/stylelint/stylelint/blob/master/lib/rules/no-extra-semicolons/README.md)

``` css
// ✗ bad
@import "x.css";;

// ✓ good
@import "x.css";
```

#### 禁止双斜线的注释
[no-invalid-double-slash-comments](https://github.com/stylelint/stylelint/blob/master/lib/rules/no-invalid-double-slash-comments/README.md)

``` css
// ✗ bad
a { // color: pink; }

// ✓ good
a { /* color: pink; */ }
```

#### 每行最多定义一个属性
[declaration-block-single-line-max-declarations](https://github.com/stylelint/stylelint/blob/master/lib/rules/declaration-block-single-line-max-declarations/README.md)

``` css
// ✗ bad
a { color: pink; top: 3px; }

// ✓ good
a {
    color: pink;
    top: 3px;
}
```
#### 禁止嵌套定义
[max-nesting-depth](https://github.com/stylelint/stylelint/blob/master/lib/rules/max-nesting-depth/README.md)

``` css
// ✗ bad
div {
    font-size: 14px;
    h1 {
        font-size: 16px;
    }
}

// ✓ good
div {
    font-size: 14px;
}
div h1{
    font-size: 16px;
}
```

#### 伪元素使用两个冒号
[selector-pseudo-element-colon-notation](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-pseudo-element-colon-notation/README.md)

``` css
// ✗ bad
a:before { color: pink; }

// ✓ good
a::before { color: pink; }
```




## 参考

- [stylelint](https://github.com/stylelint/stylelint)
- [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)
