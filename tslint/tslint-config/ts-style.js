module.exports = {
  "rules": {
    // 针对数组使用 ‘T[]’ or ‘Array', 基本类型数组强制使用T[]
    "array-type": [
      true,
      "array-simple"
    ],

    // () => { return x; } to () => x.
    "arrow-return-shorthand": true,

    // 2位运算，变量在左
    //"binary-expression-operand-order": true,

    // PascalCased 类型名称单词头字母大写
    "class-name": true,

    // comment 必须以空格开头
    "comment-format": [true, "check-space"],

    // 限制comment的种类
    // "comment-type": true

    // 强制 使用 JSDoc
    // completed-docs

    // 强制utf8编码
    // "encoding": true

    // 强制文件头comment
    // file-header

    // 强制文件名为连字符形式
    "file-name-casing": [true, "kebab-case"],

    // 强制使用 +=1 -=1
    // increment-decrement

    // 强制 Interface以 I 开头
    // interface-name

    // interface声明好过type声明
    // interface-over-type-literal

    // 需要import声明的对象和名称严格匹配
    // "match-default-export-name": true

    // 连续条用需要换行
    // "newline-per-chained-call": true,

    // 用 as 替代 <Type>
    // no-angle-bracket-type-assertion

    // if( x ===true)
    "no-boolean-literal-compare": true,

    // 构造器中不允许有参数
    // "no-parameter-properties": true

    // 不允许重复的jsdoc
    // no-redundant-jsdoc

    // 不允许 x => f(x) 这种无意义的函数调用
    "no-unnecessary-callback-wrapper": true,

    // 不允许初始值为 undefined
    "no-unnecessary-initializer": true,

    // 不允许无意义的命名空间
    // "no-unnecessary-qualifier": true,

    // 强制连续的字符串属性不为string表达
    "object-literal-key-quotes": true,

    // 强制ES6对象简写
    "object-literal-shorthand": true,

    // 确保 } 与 { catch else  finally, whitespace  同一行
    "one-line": [true,
      "check-open-brace",
      "check-catch",
      "check-else",
      "check-finally",
      "check-whitespace"
    ],

    // 每次只能声明 一个变量，循环中可以多个
    "one-variable-per-declaration": [
      true,
      "ignore-for-loop"
    ],

    // import 的 {}按字母顺序排序
    // "ordered-imports": true

    // 类型方法中没有用到 this 需要写在外面变成额外的函数
    "prefer-function-over-method": true,

    // prefer foo(): void over foo: () => void in interfaces and types.
    // prefer-method-signature

    // switch > if
    // prefer-switch

    // 模板字符串更好
    // "prefer-template": true

    // while更好
    // prefer-while

    // return; 比 return undefined 好
    "return-undefined": true,

    // xxx () {} 定义了在下列各种方法时括号前的空格要求
    "space-before-function-paren": [
      true,
      {
        "anonymous": false,
        "named": false,
        "asyncArrow": true,
        "method": false,
        "constructor": false
      }
    ],

    // 括号间不允许有空格
    "space-within-parens": [true, 0],
    // switch statement 必须以break结束
    "switch-final-break": true,
    // 类型间 必须以；隔开
    // "type-literal-delimiter": true

    // 不需要 bind
    // "unnecessary-bind": true,

    // 如果 if 以 break, continue, return, or throw statement结束则不需要else
    // "unnecessary-else": true

    // 变量名不能使用 any, Number, number, String, string, Boolean, boolean, Undefined, undefined
    "variable-name": [
      true,
      "ban-keywords"
    ],
  }
}