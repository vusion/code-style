# CSS Code Style
## 配置
使用[stylelint](https://github.com/stylelint/stylelint)

然后创建`.stylelintrc`文件，内容如下：

``` json
{
  "extends": "stylelint-config-recommended"
}

```
该配置使用stylelint-config-recommended规则。

> 说明：
> - 🔧表示可以使用--fix自动修复。

## 目录
- [Recommended](#Recommended)
- [自定义](#自定义)

## Recommended

#### at-rule-no-unknown
[at-rule-no-unknown](https://github.com/stylelint/stylelint/blob/master/lib/rules/at-rule-no-unknown/README.md)

不允许出现非法的@规则

``` css
// ✗ bad
@unknow {}

// ✓ good
@charset "UTF-8"
@media (max-width: 960px) {}
```

#### block-no-empty
[block-no-empty](https://github.com/stylelint/stylelint/blob/master/lib/rules/block-no-empty/README.md)

不允许出现空块

``` css
// ✗ bad
a { }

// ✓ good
a { color: pink; }
```

#### color-no-invalid-hex
[color-no-invalid-hex](https://github.com/stylelint/stylelint/blob/master/lib/rules/color-no-invalid-hex/README.md)

color属性不允许不合法的十六进制

``` css
// ✗ bad
a { color: #y3 }

// ✓ good
a { color: #000; }
```

#### comment-no-empty
[comment-no-empty](https://github.com/stylelint/stylelint/blob/master/lib/rules/comment-no-empty/README.md)

不允许空注释

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

#### declaration-block-no-duplicate-properties
[declaration-block-no-duplicate-properties](https://github.com/stylelint/stylelint/blob/master/lib/rules/declaration-block-no-duplicate-properties/README.md)

不允许属性重复声明

``` css
// ✗ bad
a { color: pink; color: orange; }

// ✓ good
a { color: pink; }
```

##### 选项配置
- ignore: ["consecutive-duplicates"]：允许连续的属性重复声明
``` css
// ✗ bad
p {
  font-size: 16px;
  font-weight: 400;
  font-size: 1rem;
}

// ✓ good
p {
  font-size: 16px;
  font-size: 1rem;
  font-weight: 400;
}
```
- ignore: ["consecutive-duplicates-with-different-values"]：允许连续且值不同的属性重复声明
``` css
// ✗ bad
p {
  font-size: 16px;
  font-weight: 400;
  font-size: 1rem;
}

// ✓ good
p {
  font-size: 16px;
  font-size: 1rem;
  font-weight: 400;
}
```
- ignoreProperties: ["/regex/", "non-regex"]：允许指定的属性重复声明
对于["color", "/background\-/"]
``` css
// ✗ bad
a { color: pink; background: orange; background: white; }

// ✓ good
a { color: pink; color: orange; background-color: orange; background-color: white; }
```
stylelint-config-recommended中使用的是：ignore: ["consecutive-duplicates-with-different-values"]

#### declaration-block-no-redundant-longhand-properties
[declaration-block-no-redundant-longhand-properties](https://github.com/stylelint/stylelint/blob/master/lib/rules/declaration-block-no-redundant-longhand-properties/README.md)

不允许可以合成的属性展开

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
##### 选项配置
- ignoreShorthands: ["/regex/", "string"]：允许指定的属性不简写。

#### declaration-block-no-shorthand-property-overrides
[declaration-block-no-shorthand-property-overrides](https://github.com/stylelint/stylelint/blob/master/lib/rules/declaration-block-no-shorthand-property-overrides/README.md)

不允许简写属性覆盖普通写法的属性

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

#### font-family-no-duplicate-names
[font-family-no-duplicate-names](https://github.com/stylelint/stylelint/blob/master/lib/rules/font-family-no-duplicate-names/README.md)

不允许重复字体属性声明

``` css
// ✗ bad
a { font-family: 'Times', Times, serif; }

// ✓ good
a { font-family: Times, serif; }
```
##### 选项配置
- ignoreFontFamilyNames: ["/regex/", "string"]：允许指定的属性重复。

#### function-calc-no-unspaced-operator
[function-calc-no-unspaced-operator](https://github.com/stylelint/stylelint/blob/master/lib/rules/function-calc-no-unspaced-operator/README.md)

calc函数中操作符两边必须有空格

``` css
// ✗ bad
a { top: calc(1px+2px); }

// ✓ good
a { top: calc(1px + 2px); }
```

#### function-linear-gradient-no-nonstandard-direction
[function-linear-gradient-no-nonstandard-direction](https://github.com/stylelint/stylelint/blob/master/lib/rules/function-linear-gradient-no-nonstandard-direction/README.md)

不允许`linear-gradient()`中的方向属性值不符合[标准语法](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient#Syntax).

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

#### keyframe-declaration-no-important
[keyframe-declaration-no-important](https://github.com/stylelint/stylelint/blob/master/lib/rules/keyframe-declaration-no-important/README.md)

keyframe中不允许使用!important来提升优先级。

在keyframe中使用`!important`会被某些浏览器忽略:  [MDN - !important in a keyframe](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes#!important_in_a_keyframe)

``` css
// ✗ bad
@keyframes important1 {
  from {
    margin-top: 50px;
  }
  to {
    margin-top: 100px !important;
  }
}

// ✓ good
a { color: pink !important; }

@keyframes important1 {
  from {
    margin-top: 50px;
  }
  to {
    margin-top: 100px;
  }
}
```

#### media-feature-name-no-unknown
[media-feature-name-no-unknown](https://github.com/stylelint/stylelint/blob/master/lib/rules/media-feature-name-no-unknown/README.md)

不允许未知的媒体查询名

``` css
// ✗ bad
@media screen and (unknown) {}

// ✓ good
@media (min-width: 700px) {}
```

#### no-empty-source
[no-empty-source](https://github.com/stylelint/stylelint/blob/master/lib/rules/no-empty-source/README.md)

不允许空文件

``` css
// ✗ bad
\t\t

// ✓ good
a {}
```

#### no-extra-semicolons
[no-extra-semicolons](https://github.com/stylelint/stylelint/blob/master/lib/rules/no-extra-semicolons/README.md)

不允许多余的分号

``` css
// ✗ bad
@import "x.css";;

// ✓ good
@import "x.css";
```

#### no-invalid-double-slash-comments
[no-invalid-double-slash-comments](https://github.com/stylelint/stylelint/blob/master/lib/rules/no-invalid-double-slash-comments/README.md)

不允许双斜线的注释

``` css
// ✗ bad
a { // color: pink; }

// ✓ good
a { /* color: pink; */ }
```

#### property-no-unknown
[property-no-unknown](https://github.com/stylelint/stylelint/blob/master/lib/rules/property-no-unknown/README.md)

不允许未知的属性名

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

#### selector-pseudo-class-no-unknown
[selector-pseudo-class-no-unknown](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-pseudo-class-no-unknown/README.md)

不允许未知的伪类选择器

``` css
// ✗ bad
a:hoverr {}

// ✓ good
a:hover {}
```

#### selector-pseudo-element-no-unknown
[selector-pseudo-element-no-unknown](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-pseudo-element-no-unknown/README.md)

不允许未知的伪元素选择器

``` css
// ✗ bad
a::element {}

// ✓ good
a::before {}
```
##### 选项配置
- ignorePseudoElements: ["/regex/", "string"]：允许未知的伪元素名。

#### selector-type-no-unknown
[selector-type-no-unknown](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-type-no-unknown/README.md)

不允许未知的属性

``` css
// ✗ bad
tag {}

// ✓ good
input {}
```

#### shorthand-property-no-redundant-values
[shorthand-property-no-redundant-values](https://github.com/stylelint/stylelint/blob/master/lib/rules/shorthand-property-no-redundant-values/README.md)

不允许简写属性中有冗余的值

``` css
// ✗ bad
a { margin: 1px 1px; }

// ✓ good
a { margin: 1px; }
```

#### string-no-newline
[string-no-newline](https://github.com/stylelint/stylelint/blob/master/lib/rules/string-no-newline/README.md)

不允许字符串中换行

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

#### unit-no-unknown
[unit-no-unknown](https://github.com/stylelint/stylelint/blob/master/lib/rules/unit-no-unknown/README.md)

不允许未知的单位

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

## 自定义

#### value-no-vendor-prefix
[value-no-vendor-prefix](https://github.com/stylelint/stylelint/blob/master/lib/rules/value-no-vendor-prefix/README.md)

不允许写属性前缀

``` css
// ✗ bad
a { display: -webkit-flex; }

// ✓ good
a { display: flex; }
```

#### declaration-no-important
[declaration-no-important](https://github.com/stylelint/stylelint/blob/master/lib/rules/declaration-no-important/README.md)

不允许使用!important

``` css
// ✗ bad
a { color: pink !important; }

// ✓ good
a { color: pink; }
```

#### declaration-block-single-line-max-declarations
[declaration-block-single-line-max-declarations](https://github.com/stylelint/stylelint/blob/master/lib/rules/declaration-block-single-line-max-declarations/README.md)

定义了css样式每列最多的属性个数
当设置`"declaration-block-single-line-max-declarations": [1]`时：

``` css
// ✗ bad
a { color: pink; top: 3px; }

// ✓ good
a { 
    color: pink; 
    top: 3px; 
}
```

#### max-nesting-depth
[max-nesting-depth](https://github.com/stylelint/stylelint/blob/master/lib/rules/max-nesting-depth/README.md)

定义了嵌套层级的上限
当设置`"max-nesting-depth": [0]`时：

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

#### number-no-trailing-zeros
[number-no-trailing-zeros](https://github.com/stylelint/stylelint/blob/master/lib/rules/number-no-trailing-zeros/README.md)

不允许尾随零

``` css
// ✗ bad
a { top: 1.0px }

// ✓ good
a { top: 1px }
```

#### number-leading-zero
[number-leading-zero](https://github.com/stylelint/stylelint/blob/master/lib/rules/number-leading-zero/README.md)

不允许小数点前的0。
- 设置为"number-leading-zero": ["never"]时：

``` css
// ✗ bad
a { font-size: 0.3rem; }

// ✓ good
a { font-size: .3rem; }
```
- 设置为"number-leading-zero": ["always"]时：

``` css
// ✗ bad
a { font-size: .3rem; }

// ✓ good
a { font-size: 0.3rem; }
```

#### indentation 🔧
[indentation](https://github.com/stylelint/stylelint/blob/master/lib/rules/indentation/README.md)

设置缩进
- 设置为"indentation": [4]时：

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

#### comment-empty-line-before 🔧
[comment-empty-line-before](https://github.com/stylelint/stylelint/blob/master/lib/rules/comment-empty-line-before/README.md)

设置缩进
- 设置为"comment-empty-line-before": ["always"]时：

``` css
// ✗ bad
a {}
/* comment */

// ✓ good
a {}

/* comment */

a {} /* comment */
```
- 设置为"comment-empty-line-before": ["never"]时：

``` css
// ✗ bad
a {}

/* comment */

// ✓ good
a {}
/* comment */

a {} /* comment */
```

#### at-rule-name-case 🔧
[at-rule-name-case](https://github.com/stylelint/stylelint/blob/master/lib/rules/at-rule-name-case/README.md)

设置缩进
- 设置为"at-rule-name-case": ["lower"]时：

``` css
// ✗ bad
@Charset 'UTF-8';

// ✓ good
@charset 'UTF-8';
```
- 设置为"at-rule-name-case": ["upper"]时：

``` css
// ✗ bad
@Charset 'UTF-8';

// ✓ good
@CHARSET 'UTF-8';
```

#### rule-empty-line-before 🔧
[rule-empty-line-before](https://github.com/stylelint/stylelint/blob/master/lib/rules/rule-empty-line-before/README.md)

设置语句之间是否需要空行

- 设置为"rule-empty-line-before": ["always"]时：

``` css
// ✗ bad
a {}

b {}

// ✓ good
a {}
b {}

// ✓ good
a {} b {}
```
- 设置为"rule-empty-line-before": ["never"]时：

``` css
// ✗ bad
@Charset 'UTF-8';

// ✓ good
@CHARSET 'UTF-8';
```
- 设置为"rule-empty-line-before": ["always-multi-line"]时：在多行规则前，必须有空行

``` css
// ✗ bad
a {
  color: red;
}
b {
  color: blue;
}

// ✓ good
a {
  color: red;
}

b {
  color: blue;
}
```
- 设置为"rule-empty-line-before": ["never-multi-line"]时：在多行规则前，不允许有空行

``` css
// ✗ bad
a {
  color: red;
}

b {
  color: blue;
}

// ✓ good
a {
  color: red;
}
b {
  color: blue;
}
```

#### block-opening-brace-space-before
[block-opening-brace-space-before](https://github.com/stylelint/stylelint/blob/master/lib/rules/block-opening-brace-space-before/README.md)

设置选择器与"{"之间是否需要空格
- 设置为"block-opening-brace-space-before": ["always"]时：需要空格

``` css
// ✗ bad
a{ color: pink; }
a
{ color: pink; }

// ✓ good
a { color: pink; }
```
- 设置为"block-opening-brace-space-before": ["never"]时：不允许空格

``` css
// ✗ bad
a { color: pink; }
a
{ color: pink; }

// ✓ good
a{ color: pink; }
a{
color: pink; }
```
- 设置为"block-opening-brace-space-before": ["always-single-line"]时：一行的样式需要空格

``` css
// ✗ bad
a{ color: pink; }

// ✓ good
a { color: pink; }
a{
color: pink; }
```
- 设置为"block-opening-brace-space-before": ["never-single-line"]时：一行的样式不允许空格

``` css
// ✗ bad
a { color: pink; }

// ✓ good
a{ color: pink; }
a {
color: pink; }
```
- 设置为"block-opening-brace-space-before": ["always-multi-line"]时：多的样式需要空格

``` css
// ✗ bad
a{
color: pink; }

// ✓ good
a{ color: pink; }
a {
color: pink; }
```
- 设置为"block-opening-brace-space-before": ["never-multi-line"]时：多的样式不允许空格

``` css
// ✗ bad
a {
color: pink; }

// ✓ good
a { color: pink; }
a{
color: pink; }
```
##### 选项配置
- ignoreAtRules: ["/regex/", "non-regex"]：允许符合条件的属性不按照如上空格要求。

#### selector-attribute-brackets-space-inside
[selector-attribute-brackets-space-inside](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-attribute-brackets-space-inside/README.md)

设置属性选择器的中括号中是否需要空格
- 设置为"selector-attribute-brackets-space-inside": ["always"]时：需要空格

``` css
// ✗ bad
[target] {}
[ target] {}
[target ] {}
[target=_blank] {}
[ target=_blank] {}
[target=_blank ] {}

// ✓ good
[ target ] {}
[ target=_blank ] {}
```
- 设置为"selector-attribute-brackets-space-inside": ["never"]时：不允许空格

``` css
// ✗ bad
[ target] {}
[target ] {}
[ target=_blank] {}
[target=_blank ] {}

// ✓ good
[target] {}
[target=_blank] {}
```
#### selector-attribute-operator-space-after
[selector-attribute-operator-space-after](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-attribute-operator-space-after/README.md)

设置属性选择器中操作符后是否需要空格
- 设置为"selector-attribute-operator-space-after": ["always"]时：需要空格

``` css
// ✗ bad
[target=_blank] {}
[target =_blank] {}
[target='_blank'] {}
[target="_blank"] {}
[target ='_blank'] {}
[target ="_blank"] {}

// ✓ good
[target] {}
[target= _blank] {}
[target= '_blank'] {}
[target= "_blank"] {}
[target = _blank] {}
[target = '_blank'] {}
[target = "_blank"] {}
```
- 设置为"selector-attribute-operator-space-after": ["never"]时：不允许空格

``` css
// ✗ bad
[target= _blank] {}
[target = _blank] {}
[target= '_blank'] {}
[target= "_blank"] {}
[target = '_blank'] {}
[target = "_blank"] {}

// ✓ good
[target] {}
[target=_blank] {}
[target='_blank'] {}
[target="_blank"] {}
[target =_blank] {}
[target ='_blank'] {}
[target ="_blank"] {}
```
#### selector-attribute-operator-space-before
[selector-attribute-operator-space-before](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-attribute-operator-space-before/README.md)

设置属性选择器中操作符前是否需要空格
- 设置为"selector-attribute-operator-space-before": ["always"]时：需要空格

``` css
// ✗ bad
[target=_blank] {}
[target= _blank] {}
[target='_blank'] {}
[target="_blank"] {}
[target= '_blank'] {}
[target= "_blank"] {}

// ✓ good
[target] {}
[target =_blank] {}
[target ='_blank'] {}
[target ="_blank"] {}
[target = _blank] {}
[target = '_blank'] {}
[target = "_blank"] {}
```
- 设置为"selector-attribute-operator-space-before": ["never"]时：不允许空格

``` css
// ✗ bad
[target =_blank] {}
[target = _blank] {}
[target ='_blank'] {}
[target ="_blank"] {}
[target = '_blank'] {}
[target = "_blank"] {}

// ✓ good
[target] {}
[target=_blank] {}
[target='_blank'] {}
[target="_blank"] {}
[target= _blank] {}
[target= '_blank'] {}
[target= "_blank"] {}
```
#### selector-attribute-quotes
[selector-attribute-quotes](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-attribute-quotes/README.md)

设置属性选择器中属性值是否需要冒号
- 设置为"selector-attribute-quotes": ["always"]时：需要冒号

``` css
// ✗ bad
[title=flower] {}
[class^=top] {}

// ✓ good
[title] {}
[target="_blank"] {}
[class|="top"] {}
[title~='text'] {}
[data-attribute='component'] {}
```
- 设置为"selector-attribute-quotes": ["never"]时：不允许冒号

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
#### selector-combinator-space-after
[selector-combinator-space-after](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-combinator-space-after/README.md)

选择器的连接符后是否需要空格
- 设置为"selector-combinator-space-after": ["always"]时：需要空格

``` css
// ✗ bad
a +b { color: pink; }
a>b { color: pink; }

// ✓ good
a + b { color: pink; }
a> b { color: pink; }
```
- 设置为"selector-combinator-space-after": ["never"]时：不允许空格

``` css
// ✗ bad
a + b { color: pink; }
a> b { color: pink; }

// ✓ good
a +b { color: pink; }
a>b { color: pink; }
```
#### selector-combinator-space-before
[selector-combinator-space-before](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-combinator-space-before/README.md)

选择器的连接符后是否需要空格
- 设置为"selector-combinator-space-before": ["always"]时：需要空格

``` css
// ✗ bad
a+ b { color: pink; }
a>b { color: pink; }

// ✓ good
a + b { color: pink; }
a >b { color: pink; }
```
- 设置为"selector-combinator-space-before": ["never"]时：不允许空格

``` css
// ✗ bad
a + b { color: pink; }
a >b { color: pink; }

// ✓ good
a+b { color: pink; }
a>b { color: pink; }
```
#### selector-descendant-combinator-no-non-space
[selector-descendant-combinator-no-non-space](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-descendant-combinator-no-non-space/README.md)

层级选择器的中间是否使用一个空格间隔

``` css
// ✗ bad
.foo  .bar {}

.foo
.bar {}

// ✓ good
.foo .bar {}
```
#### selector-pseudo-class-case
[selector-pseudo-class-case](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-pseudo-class-case/README.md)

规定伪类大小写
- 设置为"selector-pseudo-class-case": ["lower"]时：使用小写

``` css
// ✗ bad
a:Hover {}
a:hOvEr {}
a:HOVER {}
:ROOT {}
:-MS-INPUT-PLACEHOLDER {}

// ✓ good
a:hover {}
:root {}
:-ms-input-placeholder {}
```
- 设置为"selector-pseudo-class-case": ["upper"]时：使用大写

``` css
// ✗ bad
a:Hover {}
a:hOvEr {}
a:hover {}
:root {}
:-ms-input-placeholder {}

// ✓ good
a:HOVER {}
:ROOT {}
:-MS-INPUT-PLACEHOLDER {}
```
#### selector-pseudo-class-parentheses-space-inside
[selector-pseudo-class-parentheses-space-inside](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-pseudo-class-parentheses-space-inside/README.md)

规定伪类括号内是否需要空格
- 设置为"selector-pseudo-class-parentheses-space-inside": ["always"]时：需要空格

``` css
// ✗ bad
input:not([type="submit"]) {}
input:not([type="submit"] ) {}

// ✓ good
input:not( [type="submit"] ) {}
```
- 设置为"selector-pseudo-class-parentheses-space-inside": ["never"]时：不允许空格

``` css
// ✗ bad
input:not( [type="submit"] ) {}
input:not( [type="submit"]) {}

// ✓ good
input:not([type="submit"]) {}
```
#### selector-pseudo-element-case
[selector-pseudo-element-case](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-pseudo-element-case/README.md)

规定伪元素大小写
- 设置为"selector-pseudo-element-case": ["lower"]时：使用小写

``` css
// ✗ bad
a:Before {}
a:bEfOrE {}
a:BEFORE {}
a::Before {}
a::bEfOrE {}
a::BEFORE {}

// ✓ good
a:before {}
a::before {}
input::-moz-placeholder {}
```
- 设置为"selector-pseudo-element-case": ["upper"]时：使用大写

``` css
// ✗ bad
a:Before {}
a:bEfOrE {}
a:BEFORE {}
a::Before {}
a::bEfOrE {}
a::before {}
input::-moz-placeholder {}

// ✓ good
a:BEFORE {}
a::BEFORE {}
input::-MOZ-PLACEHOLDER {}
```
#### selector-pseudo-element-colon-notation
[selector-pseudo-element-colon-notation](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-pseudo-element-colon-notation/README.md)

规定伪元素冒号个数
- 设置为"selector-pseudo-element-colon-notation": ["single"]时：使用一个冒号

``` css
// ✗ bad
a::before { color: pink; }
a::after { color: pink; }
a::first-letter { color: pink; }
a::first-line { color: pink; }

// ✓ good
a:before { color: pink; }
a:after { color: pink; }
a:first-letter { color: pink; }
a:first-line { color: pink; }
input::placeholder { color: pink; }
li::marker { font-variant-numeric: tabular-nums; }
```
- 设置为"selector-pseudo-element-colon-notation": ["double"]时：使用两个冒号

``` css
// ✗ bad
a:before { color: pink; }
a:after { color: pink; }
a:first-letter { color: pink; }
a:first-line { color: pink; }
input::placeholder { color: pink; }
li::marker { font-variant-numeric: tabular-nums; }

// ✓ good
a::before { color: pink; }
a::after { color: pink; }
a::first-letter { color: pink; }
a::first-line { color: pink; }
```
#### selector-type-case
[selector-type-case](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-type-case/README.md)

规定元素大小写
- 设置为"selector-type-case": ["lower"]时：使用小写

``` css
// ✗ bad
A {}
LI {}

// ✓ good
a {}
li {}
```
- 设置为"selector-type-case": ["upper"]时：使用大写

``` css
// ✗ bad
a {}
li {}

// ✓ good
A {}
LI {}

```
#### selector-list-comma-newline-after
[selector-list-comma-newline-after](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-list-comma-newline-after/README.md)

规定伪元素大小写
- 设置为"selector-list-comma-newline-after": ["always"]时：逗号后需要空行

``` css
// ✗ bad
a, b { color: pink; }

a
, b { color: pink; }

// ✓ good
a,
b { color: pink; }

a
,
b { color: pink; }
```
- 设置为"selector-list-comma-newline-after": ["always-multi-line"]时：多行选择器逗号后需要空行

``` css
// ✗ bad
a
, b { color: pink; }

// ✓ good
a, b { color: pink; }

a,
b { color: pink; }

a
,
b { color: pink; }

```
- 设置为"selector-list-comma-newline-after": ["never-multi-line"]时：多行选择器逗号后不允许空白符

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

## 参考

- [stylelint](https://github.com/stylelint/stylelint)
- [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)
