# Vue Style
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
- [模板](#模板)
- [脚本](#脚本)

> 说明：
> - 语气：强制 > 要求 == !禁止 > 尽量 > 推荐 == !不推荐；
> - 🔧表示ESLint可以自动修复。

## 模板

### 空白
#### 要求模板使用4个空格缩进 🔧
[html-indent](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-indent.md)

#### 禁止模板中出现多个空格 🔧
[no-multi-spaces](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-multi-spaces.md)

#### 强制mustache使用左右始终有一个空格 🔧
[mustache-interpolation-spacing](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/mustache-interpolation-spacing.md)

### HTML格式
#### 要求标签结尾与自闭合 🔧
[html-end-tags](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-end-tags.md)
[html-self-closing](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-self-closing.md)

#### 要求HTML属性统一使用双引号
[html-quotes](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-quotes.md)

#### 要求模板中的属性使用连字符 🔧
[attribute-hyphenation](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/attribute-hyphenation.md)

``` html
// ✗ bad
<foo myProp="prop"></foo>

// ✓ good
<foo my-prop="prop"></foo>
```

#### 禁止出现重复的属性。
[no-duplicate-attributes](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-duplicate-attributes.md)

允许`class`与`:class`共存，`style`与`:style`共存。

``` html
// ✗ bad
<div foo="abc" :foo="def"></div>

// ✓ good
<div foo="abc"></div>
<div :foo="def"></div>
```

### 指令
#### 要求`v-bind`统一使用`:` 🔧
[v-bind-style](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/v-bind-style.md)

#### 要求`v-on`统一使用`@` 🔧
[v-on-style](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/v-on-style.md)

#### 不推荐混淆地使用`v-for`和`v-if`
[no-confusing-v-for-v-if](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-confusing-v-for-v-if.md)

在v-for元素上使用v-if指令时，没有使用v-for中使用的变量，会发生警告。

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

#### 要求`v-bind`、`v-if`、`v-else-if`、`v-for`、`v-model`等指令必须书写正确
[valid-v-bind](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-bind.md)
[valid-v-cloak](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-cloak.md)
[valid-v-if](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-if.md)
[valid-v-else-if](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-else-if.md)
[valid-v-else](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-else.md)
[valid-v-for](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-for.md)
[valid-v-html](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-html.md)
[valid-v-model](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-model.md)
[valid-v-on](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-on.md)
[valid-v-once](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-once.md)
[valid-v-pre](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-pre.md)
[valid-v-show](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-show.md)
[valid-v-text](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-text.md)

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

``` html
// ✗ bad
<div v-if></div>
<div v-else-if:aaa="foo"></div>
<div v-else.bbb="foo"></div>
<div v-if="foo" v-else></div>
<div v-if="foo" v-else-if="bar"></div>

// ✓ good
<div v-if="foo"></div>
<div v-else-if="bar"></div>
<div v-else></div>
```

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

### 模板中的脚本
#### 要求模板不能解析出错
[no-parsing-error](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-parsing-error.md)

`<template>`中不能出现以下错误：

- 指令中的语法错误
- Mustache的语法错误
- [HTML语法错误](https://html.spec.whatwg.org/multipage/parsing.html#parse-errors)

``` html
// ✗ bad
<div>{{ foo. }}</div>

// ✓ good
<div>{{ foo.bar }}</div>
```

#### 禁止在模板中使用`this`
[this-in-template](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/this-in-template.md)

### 其它

#### 要求`<template>`必须有正确的根元素
[valid-template-root](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-template-root.md)

`<template>`中警告以下五种错误
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

#### 禁止在`<textarea>`中出现mustache语法
[no-textarea-mustache](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-textarea-mustache.md)

``` html
// ✗ bad
<textarea>{{ message }}</textarea>

// ✓ good
<textarea v-model="message"></textarea>
```

#### 尽量不要在`v-for`中出现没用过的变量
[no-unused-vars](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-unused-vars.md)

#### 要求`v-for`必须绑定key
[require-v-for-key](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-v-for-key.md)

``` html
// ✗ bad
<div v-for="x in list"></div>

// ✓ good
<div v-for="x in list" :key="x.id"></div>
```

#### 禁止在`<template>`上出现`key`
[no-template-key](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-template-key.md)

#### 要求`<component>`的`is`必须用v-bind
[require-component-is](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-component-is.md)

``` html
// ✗ bad
<component></component>

// ✓ good
<component :is="type"></component>
```

## 脚本

### 整体
#### 要求组件名始终用连字符 🔧
[name-property-casing](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/name-property-casing.md)

#### 禁止出现重复的字段。
[no-dupe-keys](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-dupe-keys.md)

``` javascript
// ✗ bad
export default {
    props: {
        foo: String,
    },
    computed: {
        foo: {
            get () {},
        },
    },
    data: {
        foo: null,
    },
    methods: {
        foo () {},
    },
};

// ✓ good
export default {
    props: ['foo'],
    computed: {
        bar () {},
    },
    data () {
        return {
            baz: null,
        };
    },
    methods: {
        boo () {},
    },
};
```

#### 推荐使用一致的组件对象顺序
[order-in-components](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/order-in-components.md)

### 计算属性
#### 要求计算属性必须有return
[return-in-computed-property](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/return-in-computed-property.md)

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
            return;
        }
    }
}
```

#### 禁止计算属性中出现副作用
[no-side-effects-in-computed-properties](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-side-effects-in-computed-properties.md)

``` javascript
// ✗ bad
computed: {
    fullName () {
        this.firstName = 'lorem'; // <- side effect
        return `${this.firstName} ${this.lastName}`;
    },
    reversedArray () {
        return this.array.reverse(); // <- side effect
    },
},

// ✓ good
computed: {
    fullName () {
        return `${this.firstName} ${this.lastName}`
    },
    reversedArray () {
        return this.array.slice(0).reverse()
    },
}
```

#### 禁止在计算属性中使用异步方法。
[no-async-in-computed-properties](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-async-in-computed-properties.md)

### 其它
#### 禁止出现Vue的保留字
[no-reserved-keys](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-reserved-keys.md)

``` javascript
// ✗ bad
export default {
    props: {
        $el: String,
    },
    computed: {
        $on: {
            get () {},
        },
    },
    data: {
        _foo: null,
    },
    methods: {
        $nextTick () {},
    },
};
```

#### 要求属性的默认值必须正确
[require-valid-default-prop](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-valid-default-prop.md)

#### 强制组件的data为一个函数
[no-shared-component-data](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-shared-component-data.md)

``` javascript
// ✗ bad
export default {
    data: {
        foo: 'bar',
    },
};

// ✓ good
export default {
    data () {
        return {
            foo: 'bar'
        };
    },
};
```

#### 要求render函数必须要有返回值
[require-render-return](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-render-return.md)

## 参考

- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
