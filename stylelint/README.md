# CSS Code Style

## 配置

安装 [stylelint](https://github.com/stylelint/stylelint)

``` shell
npm install --save-dev stylelint stylelint-config-vusion
```

然后创建`.stylelintrc`文件：

``` json
{
  "extends": "stylelint-config-vusion"
}
```

## 编辑器配置

### VSCode

使用插件 [vscode-stylelint](https://github.com/shinnn/vscode-stylelint)

``` json
    /* stylelint配置 */
    "stylelint.enable": true,
    "css.validate": false,
    "scss.validate": false,
```

## 目录
- [空白](#空白)
- [大小写](#大小写)
- [分号](#分号)
- [引号](#引号)
- [选择器](#选择器)
- [属性](#属性)
- [值](#值)
- [注释](#注释)
- [低级错误](#低级错误)

> 说明：
> - 语气：强制 > 要求 == !禁止 > 尽量 > 推荐 == !不推荐；
> - 🔧表示 StyleLint 可以使用自动修复。

### 空白
#### 要求使用4个空格作为缩进，禁止使用 Tab 🔧
[indentation](https://stylelint.io/user-guide/rules/indentation)

``` css
/* ✗ bad */
a {
color:white;
  display: none;
}

/* ✓ good */
a {
    color: white;
}
```
#### 禁止空文件
[no-empty-source](https://stylelint.io/user-guide/rules/no-empty-source)

``` css
/* ✗ bad */
\t\t

/* ✓ good */
a {}
```

<!-- TODO: 无法限制只有一个空行，且不起作用 -->
#### 要求文件末尾有且只有一个空行 🔧
[no-missing-end-of-source-newline](https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline)

#### 禁止连续出现多个空行 🔧
[max-empty-lines](https://stylelint.io/user-guide/rules/max-empty-lines)
```css
/* ✗ bad */
a {


    color: pink;
}

/* ✓ good */
a {
    color: pink;
}
```

#### 禁止出现空行
[custom-property-empty-line-before](https://stylelint.io/user-guide/rules/custom-property-empty-line-before),
[function-max-empty-lines](https://stylelint.io/user-guide/rules/function-max-empty-lines),
[value-list-max-empty-lines](https://stylelint.io/user-guide/rules/value-list-max-empty-lines),
[declaration-empty-line-before](https://stylelint.io/user-guide/rules/declaration-empty-line-before) 🔧, TODO:规则没开
[rule-empty-line-before](https://stylelint.io/user-guide/rules/rule-empty-line-before),
[at-rule-empty-line-before](https://stylelint.io/user-guide/rules/at-rule-empty-line-before)🔧
```css
/* ✗ bad */
a {} @media {}

/* ✓ good */
a {}
```
#### 禁止行尾出现空格
[no-eol-whitespace](https://stylelint.io/user-guide/rules/no-eol-whitespace)

#### 要求分号、逗号、冒号之前没有空格，之后必须有一个空格，函数中的逗号除外。@规则分号后另起一行
<!-- [declaration-block-semicolon-newline-after](https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after), -->
[declaration-block-semicolon-newline-before](https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before),
[declaration-block-semicolon-space-after](https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after),
[declaration-block-semicolon-space-before](https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before) 🔧,
[at-rule-semicolon-newline-after](https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after)🔧,
[at-rule-semicolon-space-before](https://stylelint.io/user-guide/rules/at-rule-semicolon-space-before),
[selector-list-comma-newline-after](https://stylelint.io/user-guide/rules/selector-list-comma-newline-after),
[selector-list-comma-newline-before](https://stylelint.io/user-guide/rules/selector-list-comma-newline-before),
[selector-list-comma-space-after](https://stylelint.io/user-guide/rules/selector-list-comma-space-after),
[selector-list-comma-space-before](https://stylelint.io/user-guide/rules/selector-list-comma-space-before)🔧,
[value-list-comma-newline-after](https://stylelint.io/user-guide/rules/value-list-comma-newline-after),
[value-list-comma-newline-before](https://stylelint.io/user-guide/rules/value-list-comma-newline-before),
[value-list-comma-space-after](https://stylelint.io/user-guide/rules/value-list-comma-space-after),
[value-list-comma-space-before](https://stylelint.io/user-guide/rules/value-list-comma-space-before),
[function-comma-newline-after](https://stylelint.io/user-guide/rules/function-comma-newline-after),
[function-comma-newline-before](https://stylelint.io/user-guide/rules/function-comma-newline-before),
[function-comma-space-after](https://stylelint.io/user-guide/rules/function-comma-space-after),
[function-comma-space-before](https://stylelint.io/user-guide/rules/function-comma-space-before),
[media-query-list-comma-newline-after](https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after),
[media-query-list-comma-newline-before](https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before),
[declaration-colon-newline-after](https://stylelint.io/user-guide/rules/declaration-colon-newline-after),
[media-query-list-comma-space-after](https://stylelint.io/user-guide/rules/media-query-list-comma-space-after),
[media-query-list-comma-space-before](https://stylelint.io/user-guide/rules/media-query-list-comma-space-before),
[declaration-colon-newline-after](https://stylelint.io/user-guide/rules/declaration-colon-newline-after),
[declaration-colon-space-after](https://stylelint.io/user-guide/rules/declaration-colon-space-after),
[declaration-colon-space-before](https://stylelint.io/user-guide/rules/declaration-colon-space-before),
[media-feature-colon-space-after](https://stylelint.io/user-guide/rules/media-feature-colon-space-after),
[media-feature-colon-space-before](https://stylelint.io/user-guide/rules/media-feature-colon-space-before)
```css
/* ✗ bad */
a ,b
,
span {
    transform: translate(1
  ,1)
  ;top: 0;left: 0;
  color :pink
}
@media (max-width :600px) {}
@import url("x.css") ; a {}

/* ✓ good */
a, b, span {
    transform: translate(1,1);
    top: 0;
    left: 0;
    color: pink;
}
@media (max-width: 600px) {}
@import url("x.css");
a {}

```

#### 禁止在小括号（伪类选择器、函数、媒体查询）和中括号（属性选择器）内加空格，要求在大括号（块）内边缘加一个空格，括号之间加一个空格
[selector-attribute-brackets-space-inside](https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside),
[selector-pseudo-class-parentheses-space-inside](https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside),
[function-parentheses-space-inside](https://stylelint.io/user-guide/rules/function-parentheses-space-inside),
[media-feature-parentheses-space-inside](https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside),
[function-whitespace-after](https://stylelint.io/user-guide/rules/function-whitespace-after)

``` css
/* ✗ bad */
input:not( [ type= "submit"] ) {}
[ target ] {}
@media ( max-width:600px) {}

/* ✓ good */
input:not([type="submit"]) {}
[target] {}
@media (max-width: 600px) {}

```

#### 要求块在独立的行，大括号前不能有空行，必须要有空格

[block-closing-brace-empty-line-before](https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before),
[block-closing-brace-newline-after](https://stylelint.io/user-guide/rules/block-closing-brace-newline-after),
<!-- [block-closing-brace-newline-before](https://stylelint.io/user-guide/rules/block-closing-brace-newline-before), -->
<!-- [block-closing-brace-space-after](https://stylelint.io/user-guide/rules/block-closing-brace-space-after), -->
[block-closing-brace-space-before](https://stylelint.io/user-guide/rules/block-closing-brace-space-before),
[block-opening-brace-newline-after](https://stylelint.io/user-guide/rules/block-opening-brace-newline-after),
[block-opening-brace-newline-before](https://stylelint.io/user-guide/rules/block-opening-brace-newline-before),
[block-opening-brace-space-after](https://stylelint.io/user-guide/rules/block-opening-brace-space-after),
[block-opening-brace-space-before](https://stylelint.io/user-guide/rules/block-opening-brace-space-before)🔧

``` css
/* ✗ bad */
a{color: pink;
    top: 0;
}b
{color: pink;}

/* ✓ good */
a {
    color: pink;
    top: 0;
}
b { color: pink; }
```

#### 不允许出现空块
[block-no-empty](https://stylelint.io/user-guide/rules/block-no-empty)

``` css
/* ✓ bad */
a { }

/* ✓ good */
a { color: pink; }
```

#### 属性操作符周围不加空格，计算函数、媒体查询等其它操作符要加空格
[selector-attribute-operator-space-after](https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after),
[selector-attribute-operator-space-before](https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before),
[media-feature-range-operator-space-after](https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after),
[media-feature-range-operator-space-before](https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before),
[function-calc-no-unspaced-operator](https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator)

``` css
/* ✗ bad */
[ target ="_blank"] {}
a { top: calc(1px+2px); }
@media (width >=600px) {}
/* ✓ good */
[target="_blank"] {}
a { top: calc(1px + 2px); }
@media (width >= 600px) {}
```

#### 要求选择器之间必须有空格，但不能有多余的空格
[selector-combinator-space-after](https://stylelint.io/user-guide/rules/selector-combinator-space-after)🔧,
[selector-combinator-space-before](https://stylelint.io/user-guide/rules/selector-combinator-space-before)🔧,
[selector-descendant-combinator-no-non-space](https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space)

``` css
/* ✗ bad */
a +b { color: pink; }
a>b { color: pink; }
.foo  .bar {}

/* ✓ good */
a + b { color: pink; }
a> b { color: pink; }
.foo .bar {}
```

#### 要求`!`前必须加一个空格，后面不加
[declaration-bang-space-after](https://stylelint.io/user-guide/rules/declaration-bang-space-after),
[declaration-bang-space-before](https://stylelint.io/user-guide/rules/declaration-bang-space-before),

## 大小写
#### 要求@规则，选择器的标签、伪类、伪元素，属性、关键值、单位、函数名、颜色值、媒体查询均小写
[at-rule-name-case](https://stylelint.io/user-guide/rules/at-rule-name-case)🔧,
[selector-type-case](https://stylelint.io/user-guide/rules/selector-type-case),
[selector-pseudo-element-case](https://stylelint.io/user-guide/rules/selector-pseudo-element-case),
[selector-pseudo-class-case](https://stylelint.io/user-guide/rules/selector-pseudo-class-case),
[property-case](https://stylelint.io/user-guide/rules/property-case),
[value-keyword-case](https://stylelint.io/user-guide/rules/value-keyword-case),
[unit-case](https://stylelint.io/user-guide/rules/unit-case),
[function-name-case](https://stylelint.io/user-guide/rules/function-name-case),
[color-hex-case](https://stylelint.io/user-guide/rules/color-hex-case),
[media-feature-name-case](https://stylelint.io/user-guide/rules/media-feature-name-case)

``` css
/* ✗ bad */
@Charset 'UTF-8';

A {
    Display: BLOCK;
    Width: 1PX;
    height: Calc(5% - 10em);
    color: #DEF;
}

A:HOVER {}
LI::BEFORE {}
:ROOT {}

@media (MIN-WIDTH: 700px) {}
```

``` css
/* ✓ good */
@charset 'utf-8';

a {
    display: block;
    width: 1px;
    height: calc(5% - 10em);
    color: #def;
}

a:hover {}
li::before {}
:root {}

@media (min-width: 700px) and (orientation: landscape) {}
```

## 分号
#### 块结尾也使用分号，禁止多余的分号
[declaration-block-trailing-semicolon](https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon)🔧,
[no-extra-semicolons](https://stylelint.io/user-guide/rules/no-extra-semicolons)

``` css
/* ✗ bad */
.case { font-size: 16px; color: red }
@import "x.css";;

/* ✓ good */
.case { font-size: 16px; color: red; }
@import "x.css";

```

## 引号
#### 统一使用双引号
[string-quotes](https://stylelint.io/user-guide/rules/string-quotes)

#### 要求属性选择器中的值必须添加引号
[selector-attribute-quotes](https://stylelint.io/user-guide/rules/selector-attribute-quotes)

``` css
/* ✗ bad */
[title=flower] {}

/* ✓ good */
[target="_blank"] {}
```

#### 要求url必须添加引号
[function-url-quotes](https://stylelint.io/user-guide/rules/function-url-quotes)

#### 字体为多个单词时必须使用引号
[font-family-name-quotes](https://stylelint.io/user-guide/rules/font-family-name-quotes)
``` css
/* ✗ bad */
a { font-family: Times New Roman, Times, serif; }

/* ✓ good */
a { font-family: 'Times New Roman', Times, serif; }
```

## 选择器
#### 要求伪元素使用两个冒号
[selector-pseudo-element-colon-notation](https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation)🔧

``` css
/* ✗ bad */
a:before { color: pink; }

/* ✓ good */
a::before { color: pink; }
```
#### 要求规则之间没有降级特性
[no-descending-specificity](https://stylelint.io/user-guide/rules/no-descending-specificity)
``` css
/* ✗ bad */
#wrapper a { color: pink; }
a { color: gray; }

/* ✓ good */
a { color: gray; }
#wrapper a { color: pink; }
```

## 属性
#### 每行最多定义2个属性
[declaration-block-single-line-max-declarations](https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations)

``` css
/* ✗ bad */
a { color: pink; top: 3px; background: url('./test.png'); }

/* ✓ good */
a { color: pink; top: 3px; }
a {
    color: pink;
    top: 3px;
    background: url('./test.png');
}
```

#### 尽量简写属性
[declaration-block-no-redundant-longhand-properties](https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties),
[shorthand-property-no-redundant-values](https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values)🔧

``` css
/* ✗ bad */
a {
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
}
a { margin: 1px 1px; }

/* ✓ good */
a {
    padding: 1px 2px 3px 4px;
}
a {
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 10px;
}
a { margin: 1px; }
```
#### 禁止简写属性覆盖展开写法的属性
[declaration-block-no-shorthand-property-overrides](https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides)

``` css
/* ✗ bad */
a {
    padding-left: 10px;
    padding: 20px;
}

/* ✓ good */
a {
    padding: 20px;
    padding-left: 10px;
}
```

## 值
#### 要求有前导0，禁止有尾随0
[number-leading-zero](https://stylelint.io/user-guide/rules/number-leading-zero),
[number-no-trailing-zeros](https://stylelint.io/user-guide/rules/number-no-trailing-zeros)

#### 为0数字不带单位
[length-zero-no-unit](https://stylelint.io/user-guide/rules/length-zero-no-unit)

<!-- TODD: 为什么是6位？ -->
#### 数字最多保留6位小数
[number-max-precision](https://stylelint.io/user-guide/rules/number-max-precision)
```css
/* ✓ bad */
a { top: 3.2450908px; }

/* ✓ good */
a { top: 3.245px; }

```
#### 颜色尽可能使用名称，尽可能使用缩写的十六进制
[color-named](https://stylelint.io/user-guide/rules/color-named),
[color-hex-length](https://stylelint.io/user-guide/rules/color-hex-length)
```css
/* ✗ bad */
a { color: #000; }
a { color: #ffffffaa; }

/* ✓ good */
a { color: black; }
a { color: #fffa; }
```
#### `linear-gradient()`中的方向属性值必须符合标准语法
[function-linear-gradient-no-nonstandard-direction](https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction)

``` css
/* ✗ bad */
.foo { background: linear-gradient(top,white,black); }
.foo { background: linear-gradient(45,white,black); }
.foo { background: linear-gradient(to top top,white,black); }

/* ✓ good */
.foo { background: linear-gradient(to top,white,black); }
.foo { background: linear-gradient(45deg,white,black); }
.foo { background: linear-gradient(1.57rad,white,black); }
```

## 注释
#### 要求注释必须有内容，且符号和内容之间有一个空格或空行
[comment-whitespace-inside](https://stylelint.io/user-guide/rules/comment-whitespace-inside)
[comment-no-empty](https://stylelint.io/user-guide/rules/comment-no-empty)

``` css
/* ✗ bad */
/**/
/*

 */
/*comment*/

/* ✓ good */
/* comment */
/*
 * Multi-line Comment
**/

```

#### 禁止双斜线的注释
[no-invalid-double-slash-comments](https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments)

``` css
/* ✗ bad */
a {
    // color: pink;
}

/* ✓ good */
a {
    /* color: pink; */
}
```


## 低级错误
#### 禁止出现重复的属性、选择器、@import、字体名
[declaration-block-no-duplicate-properties](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties),
[no-duplicate-selectors](https://stylelint.io/user-guide/rules/no-duplicate-selectors),
[no-duplicate-at-import-rules](https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules),
[font-family-no-duplicate-names](https://stylelint.io/user-guide/rules/font-family-no-duplicate-names)

``` css
/* ✗ bad */
a {
    color: pink;
    color: orange;
    font-family: 'Times', Times, serif;
}
p {
    font-size: 16px;
    font-weight: 400;
    font-size: 1rem;
}
@import 'a.css';
@import 'a.css';

/* ✓ good */
a {
    color: pink;
    font-family: Times, serif;
}
p {
    font-size: 16px;
    font-size: 1rem;
    font-weight: 400;
}
@import 'a.css';
```

#### 禁止出现未知的@规则，选择器标签、伪类、伪元素，属性、单位、颜色值，媒体查询，动画
[at-rule-no-unknown](https://stylelint.io/user-guide/rules/at-rule-no-unknown),
[selector-pseudo-class-no-unknown](https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown),
[selector-pseudo-element-no-unknown](https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown),
[selector-type-no-unknown](https://stylelint.io/user-guide/rules/selector-type-no-unknown),
[property-no-unknown](https://stylelint.io/user-guide/rules/property-no-unknown),
[unit-no-unknown](https://stylelint.io/user-guide/rules/unit-no-unknown),
[color-no-invalid-hex](https://stylelint.io/user-guide/rules/color-no-invalid-hex),
[media-feature-name-no-unknown](https://stylelint.io/user-guide/rules/media-feature-name-no-unknown),
[no-unknown-animations](https://stylelint.io/user-guide/rules/no-unknown-animations)

``` css
/* ✗ bad */
@unknow {}
@media screen and (unknown) {}

a:unknown {
    colr: blue;
    background: #y3;
    width: 10pixels;
}
a::element {}
tag {}
a {
    width: 10pixels;
}
a {
    color: #00;
}
a { animation-name: fancy-slide; }

```

``` css
/* ✓ good */
@charset "utf-8";
@media (min-width: 700px) {}

a:hover {
    color: blue;
    background: white;
    width: 10px;
}
a::before {}
input {}
a {
    width: 10px;
}
a {
    color: #00;
}
a { animation-name: fancy-slide; }
@keyframes fancy-slide {}
```

#### 禁止字符串换行
[string-no-newline](https://stylelint.io/user-guide/rules/string-no-newline)

``` css
/* ✗ bad */
a {
    content: "first
    second";
}

/* ✓ good */
a {
    content: "first\\nsecond";
}
```

#### 要求字体结尾必须添加通用词
[font-family-no-missing-generic-family-keyword](https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword)
``` css
/* ✗ bad */
a {
    font-family: Helvetica, Arial, Verdana, Tahoma;
}
/* ✓ good */
a {
    font-family: Helvetica, Arial, Verdana, Tahoma, serif;
}
```

#### keyframe 中禁止添加 important
[keyframe-declaration-no-important](https://stylelint.io/user-guide/rules/keyframe-declaration-no-important)
```css
/* ✗ bad */
@keyframes important1 {
    from {
        margin-top: 50px;
    }
    to {
        margin-top: 100px !important;
    }
}
/* ✓ good */
@keyframes important1 {
    from {
        margin-top: 50px;
    }
    to {
        margin-top: 100px;
    }
}
```
## 参考

- [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)

<!-- TODO：为什么注释掉
'at-rule-name-space-after': ['always-single-line'],
#### 同行的媒体查询后必须后空格

[at-rule-name-space-after](https://stylelint.io/user-guide/rules/at-rule-name-space-after)

``` css
/* ✗ bad */
@charset"UTF-8";

/* ✓ good */
@charset "UTF-8";

```
-->
