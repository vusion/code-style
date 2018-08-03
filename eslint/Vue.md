# Vue Style

该配置使用 recommend 规则，然后定制了部分规则。

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

#### 强制 mustache 使用左右始终有一个空格 🔧
[mustache-interpolation-spacing](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/mustache-interpolation-spacing.md)

#### 要求标签边缘不能有空格，自闭合斜杠前要有空格 🔧
[html-closing-bracket-spacing](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-closing-bracket-spacing.md)

### HTML格式
#### 要求标签结尾括号始终不换行 🔧
[vue/html-closing-bracket-newline](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-closing-bracket-newline.md)

#### 要求有正确的标签结尾，只有 svg 和 math 标签使用自闭合 🔧
[html-end-tags](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-end-tags.md), [html-self-closing](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-self-closing.md)

#### 要求 HTML 属性统一使用双引号
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

#### 不推荐在同一个元素上使用`v-for`和`v-if`
[no-use-v-if-with-v-for](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-use-v-if-with-v-for.md)

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
[valid-v-bind](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-bind.md), [valid-v-cloak](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-cloak.md), [valid-v-if](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-if.md), [valid-v-else-if](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-else-if.md), [valid-v-else](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-else.md), [valid-v-for](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-for.md), [valid-v-html](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-html.md), [valid-v-model](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-model.md), [valid-v-on](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-on.md), [valid-v-once](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-once.md), [valid-v-pre](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-pre.md), [valid-v-show](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-show.md), [valid-v-text](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-text.md)

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

#### 要求`<component>`的`is`必须用`v-bind`
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

#### 禁止出现重复的字段
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

### 属性
#### 要求属性必须要有类型
[require-prop-types](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-prop-types.md)

#### 不要求属性必须有默认值
[vue/require-default-prop](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-default-prop.md)

#### 要求属性的默认值必须正确
[require-valid-default-prop](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-valid-default-prop.md)


### 计算属性
#### 要求计算属性必须有 return
[return-in-computed-property](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/return-in-computed-property.md)

``` javascript
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

#### 禁止在计算属性中使用异步方法
[no-async-in-computed-properties](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-async-in-computed-properties.md)

### 其它
#### 禁止出现 Vue 的保留字
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

#### 强制组件的 data 为一个函数
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

#### 要求 render 函数必须要有返回值
[require-render-return](https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-render-return.md)

## 参考

- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
