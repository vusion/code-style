# Vue JavaScript Style
## 配置
使用[eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)

然后创建`.eslintrc`文件，内容如下：

``` json
{
    "extends": [
        "plugin:vue/recommended",
    ],
    "env": {
        "browser": true,
        "node": true
    },
    "plugins": [
        "vue"
    ],
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "overrides": [{
        "files": ["*.vue"],
        "rules": {
            "vue/return-in-computed-property": [2],
            "vue/no-dupe-keys": [2, {
                "groups": ["asyncComputed"]
            }]
        }
    }]
}

```
该配置使用recommend规则，以及部分其他规则。

## 目录
- [Recommended](#Recommended)
- [自定义](#自定义)

> 说明：
> - 🔧表示可以使用--fix自动修复。

## Recommended

#### no-parsing-error
[no-parsing-error](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-parsing-error.md)

要求&lt;template&gt;中没有以下错误

- 指令中的语法错误
- Mustache的语法错误
- [HTML语法错误](https://html.spec.whatwg.org/multipage/parsing.html#parse-errors)

``` html
// ✗ bad
<div>{{z=1?x=1}}</div>

// ✓ good
<div>{{z==1?1:2}}</div>
```

#### valid-template-root
[valid-template-root](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-template-root.md)

&lt;template&gt;中警告以下五种错误
- 无根元素. E.g. `<template></template>`.
- 根元素是文本. E.g. `<template>hello</template>`.
- 多个根元素. E.g. `<template><div>one</div><div>two</div></template>`.
- 根元素含有`v-for`指令. E.g. `<template><div v-for="x in list">{{x}}</div></template>`.
- 根元素是`<template>` 或者 `<slot>`. E.g. `<template><template>hello</template></template>`.

``` html
// ✗ bad
<template>
    <div>hello</div>
    <div>hello</div>
</template>

// ✓ good
<template>
    <div> 
        <div>hello</div>
        <div>hello</div>
    </div>
</template>
```

#### valid-v-bind
[valid-v-bind](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-bind.md)

`v-bind`指令不得为以下两种情况:

- 无属性值. E.g. `<div v-bind:aaa></div>`
- 无效的修饰符. E.g. `<div v-bind:aaa.bbb="ccc"></div>`

``` html
// ✗ bad
<div v-bind></div>
<div :aaa></div>
<div v-bind:aaa.bbb="foo"></div>

// ✓ good
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>
<div v-bind:text-content.prop="text"></div>
<my-component :prop="someThing"></my-component>
```

#### valid-v-cloak
[valid-v-cloak](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-cloak.md)

`v-cloak`指令警告以下三种情况:

- 有参数. E.g. `<div v-cloak:aaa></div>`
- 有修饰符. E.g. `<div v-cloak.bbb></div>`
- 有属性值. E.g. `<div v-cloak="ccc"></div>`

``` html
// ✗ bad
<div v-cloak:aaa></div>
<div v-cloak.bbb></div>
<div v-cloak="ccc"></div>

// ✓ good
<div v-cloak></div>
```

#### valid-v-if
[valid-v-if](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-if.md)

`v-if`指令警告以下四种情况:

- 有参数. E.g. `<div v-if:aaa="foo"></div>`
- 有修饰符. E.g. `<div v-if.bbb="foo"></div>`
- 无属性值. E.g. `<div v-if></div>`
- 同时有`v-else`/`v-else-if`. E.g. `<div v-else v-if="foo"></div>`

``` html
// ✗ bad
<div v-if></div>
<div v-if:aaa="foo"></div>
<div v-if.bbb="foo"></div>
<div v-if="foo" v-else></div>
<div v-if="foo" v-else-if="bar"></div>

// ✓ good
<div v-if="foo"></div>
<div v-else-if="bar"></div>
<div v-else></div>
```

#### valid-v-else-if
[valid-v-else-if](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-else-if.md)

`v-else-if`指令警告以下五种情况:

- 有参数. E.g. `<div v-if="foo"></div><div v-else-if:aaa="bar"></div>`
- 有修饰符. E.g. `<div v-if="foo"></div><div v-else-if.bbb="bar"></div>`
- 无属性值. E.g. `<div v-if="foo"></div><div v-else-if></div>`
- 没对应的`v-if`/`v-else-if`指令. E.g. `<div v-else-if="bar"></div>`
- 同时有`v-if`/`v-else`指令. E.g. `<div v-if="foo" v-else-if="bar"></div>`

``` html
// ✗ bad
<div v-else-if></div>
<div v-else-if:aaa="foo"></div>
<div v-else-if.bbb="foo"></div>

// ✓ good
<div v-if="foo"></div>
<div v-else-if="bar"></div>
```

#### valid-v-else
[valid-v-else](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-else.md)

`v-else`指令警告以下五种情况:

- 有参数. E.g. `<div v-if="foo"></div><div v-else:aaa></div>`
- 有修饰符. E.g. `<div v-if="foo"></div><div v-else.bbb></div>`
- 有属性值. E.g. `<div v-if="foo"></div><div v-else="bar"></div>`
- 没有对应的`v-if`/`v-if-else`. E.g. `<div v-else></div>`
- 同时有`v-if`/`v-if-else`指令. E.g. `<div v-if="foo" v-else></div>`

``` html
// ✗ bad
<div v-else="foo"></div>
<div v-else:aaa></div>
<div v-else.bbb></div>

// ✓ good
<div v-if="foo"></div>
<div v-else></div>
```

#### valid-v-for
[valid-v-for](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-for.md)

`v-for`指令警告以下五种情况:

- 有参数. E.g. `<div v-for:aaa></div>`
- 有修饰符. E.g. `<div v-for.bbb></div>`
- 无属性值. E.g. `<div v-for></div>`
- 自定义组件没有`v-bind:key`. E.g. `<your-component v-for="item in list"></your-component>`
- `v-bind:key`指令没有使用`v-for`中定义的变量. E.g. `<div v-for="x in list" :key="foo"></div>`

``` html
// ✗ bad
<div v-for></div>
<div v-for:aaa="x in list"></div>
<div v-for.bbb="x in list"></div>
<your-component v-for="x in list"></your-component>
<div is="your-component" v-for="x in list"></div>
<your-component  v-for="x in list" :key="foo"></your-component>

// ✓ good
<div v-for="x in list"></div>
<your-component v-for="x in list" :key="x.id"></your-component>
<div is="your-component" v-for="x in list" :key="x.id"></div>
```

#### valid-v-html
[valid-v-html](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-html.md)

`v-html`指令警告以下三种情况:

- 有参数. E.g. `<div v-html:aaa></div>`
- 有修饰符. E.g. `<div v-html.bbb></div>`
- 无属性值. E.g. `<div v-html></div>`

``` html
// ✗ bad
<div v-html></div>
<div v-html:aaa="foo"></div>
<div v-html.bbb="foo"></div>

// ✓ good
<div v-html="foo"></div>
```

#### valid-v-model
[valid-v-model](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-model.md)

`v-model`指令警告以下8种情况:

- 有参数. E.g. `<input v-model:aaa="foo">`
- 有不支持的修饰符. E.g. `<input v-model.bbb="foo">`
- 无属性值. E.g. `<input v-model>`
- 属性值无效 E.g. `<input v-model="foo() + bar()">`
- 元素不支持该指令. E.g. `<div v-model="foo"></div>`
- `<input>`的type是动态的. E.g. `<input :type="type" v-model="foo">`
- `<input>`的类型是`file`. E.g. `<input type="file" v-model="foo">`
- 绑定的值是迭代变量. E.g. `<div v-for="x in list"><input type="file" v-model="x"></div>`

``` html
// ✗ bad
<input v-model>
    <input v-model:aaa="foo">
    <input v-model.bbb="foo">
    <input v-model="foo + bar">
    <div v-model="foo"></div>
    <div v-for="x in list">
        <input v-model="x">
    </div>
</div>

// ✓ good
<input v-model="foo">
<input v-model.lazy="foo">
<textarea v-model="foo"></textarea>
<your-component v-model="foo"></your-component>
<div v-for="x in list">
    <input v-model="x.name">
</div>
```

#### valid-v-on
[valid-v-on](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-on.md)

`v-on`指令警告以下3种情况:

- 没有该事件. E.g. `<div v-on="foo"></div>`
- 无效的修饰符. E.g. `<div v-on:click.bbb="foo"></div>`
- 无属性值. E.g. `<div v-on:click></div>`

``` html
// ✗ bad
<div v-on="foo"></div>
<div v-on:click="foo"></div>
<div v-on:click.bbb="foo"></div>

// ✓ good
<div v-on:click="foo"></div>
<div @click="foo"></div>
<div @click.left="foo"></div>
<div @click.prevent></div>
<div @click.stop></div>
```

#### valid-v-once
[valid-v-once](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-once.md)

`v-once`指令警告以下3种情况:

- 有参数. E.g. `<div v-once:aaa></div>`
- 有修饰符. E.g. `<div v-once.bbb></div>`
- 有属性值. E.g. `<div v-once="ccc"></div>`

``` html
// ✗ bad
<div v-once:aaa></div>
<div v-once.bbb></div>
<div v-once="ccc"></div>

// ✓ good
<div v-once></div>
```

#### valid-v-pre
[valid-v-pre](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-pre.md)

`v-pre`指令警告以下3种情况:

- 有参数. E.g. `<div v-pre:aaa></div>`
- 有修饰符. E.g. `<div v-pre.bbb></div>`
- 有属性值. E.g. `<div v-pre="ccc"></div>`

``` html
// ✗ bad
<div v-pre:aaa></div>
<div v-pre.bbb></div>
<div v-pre="ccc"></div>

// ✓ good
<div v-pre></div>
```

#### valid-v-show
[valid-v-show](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-show.md)

`v-show`指令警告以下3种情况:

- 有参数. E.g. `<div v-show:aaa></div>`
- 有修饰符. E.g. `<div v-show.bbb></div>`
- 无属性值. E.g. `<div v-show></div>`

``` html
// ✗ bad
<div v-show:aaa></div>
<div v-show.bbb></div>
<div v-show></div>

// ✓ good
<div v-show="ccc"></div>
```

#### valid-v-text
[valid-v-text](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-text.md)

`v-text`指令警告以下3种情况:

- 有参数. E.g. `<div v-text:aaa></div>`
- 有修饰符. E.g. `<div v-text.bbb></div>`
- 无属性值. E.g. `<div v-text></div>`

``` html
// ✗ bad
<div v-text:aaa></div>
<div v-text.bbb></div>
<div v-text></div>

// ✓ good
<div v-text="ccc"></div>
```

#### no-confusing-v-for-v-if
[no-confusing-v-for-v-if](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-confusing-v-for-v-if.md)

`no-confusing-v-for-v-if`规则警告以下1种情况:

- 在v-for元素上使用v-if指令时，没有使用v-for中使用的变量。

``` html
// ✗ bad
<ol>
    <li v-if="shown" v-for="item in items">{{item.message}}</li>
</ol>

// ✓ good
<ol>
    <li v-for="item in items" v-if="item.shown">{{item.message}}</li>
</ol>
<ol v-if="shown">
    <li v-for="item in items">{{item.message}}</li>
</ol>
```

#### no-textarea-mustache
[no-textarea-mustache](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-textarea-mustache.md)

`no-textarea-mustache`规则警告以下1种情况:

- 在textarea标签中使用mustaches。

``` html
// ✗ bad
<textarea>{{message}}</textarea>

// ✓ good
<textarea v-model="message"></textarea>
```

#### require-component-is
[require-component-is](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-component-is.md)

`require-component-is`规则警告以下1种情况:

- component元素上没有使用"v-bind:is"。

``` html
// ✗ bad
<component></component>

// ✓ good
<component :is="type"></component>
```

#### require-v-for-key
[require-v-for-key](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-v-for-key.md)

`require-v-for-key`规则警告以下1种情况:

- 元素上有v-for属性，但没有"v-bind:key"。

``` html
// ✗ bad
<div v-for="x in list"></div>

// ✓ good
<div v-for="x in list" :key="x.id"></div>
```

## 自定义

#### return-in-computed-property
[return-in-computed-property](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/return-in-computed-property.md)

`return-in-computed-property`规则警告以下1种情况:

- computed中的属性没有返回值。

``` html
// ✗ bad
export default {
  computed: {
    foo () {
    },
    bar: function () {
    }
  }
}

// ✓ good
export default {
  computed: {
    foo () {
      return true
    },
    bar: function () {
      return false
    }
  }
}
```

#### no-duplicate-attributes
[no-duplicate-attributes](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-duplicate-attributes.md)

`no-duplicate-attributes`规则警告以下1种情况:

- bind重复变量。

``` html
// ✗ bad
<div foo="abc" :foo="def"></div>

// ✓ good
<div foo="abc"></div>
<div :foo="def"></div>
```

##### 选项

- allowCoexistClass：class与:class可以共存. E.g. `<div :class="side" class="x">`
- allowCoexistStyle：style与:style可以共存.
```
'vue/no-duplicate-attributes': [2, {
  allowCoexistClass: Boolean // default: true
  allowCoexistStyle: Boolean, // default: true
}]
```

#### attribute-hyphenation 🔧
[attribute-hyphenation](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/attribute-hyphenation.md)

`attribute-hyphenation`规则规定属性值是否统一使用连字符
```
'vue/attribute-hyphenation': [2, 'always'|'never']
```

##### `"always"` (驼峰式写法报错)

``` html
// ✗ bad
<foo myProp="prop">
    <a onClick="return false"></a>
</foo>

// ✓ good
<foo my-prop="prop">
    <a onClick="return false"></a>
</foo>
```

##### `"never"` - 不使用连字符. (除了 `data-` 和 `aria-`，其他连接符写法均报错)

``` html
// ✗ bad
<foo my-prop="prop">
    <a onClick="return false"></a>
</foo>

// ✓ good
<foo myProp="prop">
    <a onClick="return false"></a>
</foo>
```

## 参考

- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
