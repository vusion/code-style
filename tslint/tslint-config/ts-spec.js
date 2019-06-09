module.exports = {
  "rules": {
    "adjacent-overload-signatures": true,

    // 禁用 @ts-ignore
    // "ban-ts-ignore": true

    // 禁用特定类型
    // "ban-types": [true, ["Object", "Use {} instead."], ["String"]]

    // 控制类属性访问
    // "member-access": [true, "no-public"],

    // 类属性排序，更易读
    "member-ordering": [
      true,
      {
        "order": [
          "public-static-field",
          "public-instance-field",
          "public-constructor",
          "private-static-field",
          "private-instance-field",
          "private-constructor",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method"
        ],
        "alphabetize": true
      }
    ],
    // 不能有 any 类型
    // "no-any": true

    // 不允许空接口
    "no-empty-interface": true,

    // 不能引入不 export 但对整个项目有影响的模块
    // "no-import-side-effect": true

    //  serverId: number = 10 可以由类型推断得出的基本类型不需要明显声明类型
    "no-inferrable-types": [
      true,
      "ignore-params"
    ],

    // module MyModule {} 这种情况下用 namespace 替代 module
    "no-internal-module": true,

    // 只能使用其中的数字
    // "no-magic-numbers": [true, 1,2,3]

    // 不能使用 namespace 或 module
    // "no-namespace": true

    // 不能使用 非空变量断言 xxxx!
    // "no-non-null-assertion" :true

    // 不能对参数赋值
    // "no-parameter-reassignment": true

    // 不允许 /// <reference path=> imports
    // "no-reference": ture

    // 不允许不改变表述类型的类型声明
    // "no-unnecessary-type-assertion": true

    // 不允许 require()
    // "no-var-requires": true;

    // 匿名函数只允许箭头函数 allow-named-functions
    "only-arrow-functions": [
      true,
      "allow-named-functions"
    ],

    // 如果序号对循环没有别的用处使用for of
    "prefer-for-of": true,

    // async 指定的函数需要返回一个Promise对象
    "promise-function-async": [
      true,
      "check-function-declaration", // 函数声明
      "check-function-expression", // 函数表达式
      "check-arrow-function", // 箭头函数
      "check-method-declaration" // 类方法声明
    ],

    // 需要对应的类型显示声明定义
    "typedef": [
      true,
      "call-signature", //检查函数返回类型
      "arrow-call-signature", //检查箭头函数返回类型
      "parameter", //检查非箭头函数的参数类型
      "arrow-parameter", //检查箭头函数的参数类型
      "property-declaration", //检查类属性声明
      "variable-declaration", //检查局部变量声明
      "member-variable-declaration", //检查成员变量声明
      "object-destructuring", //检查对象解构赋值声明
      // "array-destructuring", //检查数组解构赋值声明
    ],

    // 若重写函数能够被合并成一个，则报警
    "unified-signatures": true,
  },
}