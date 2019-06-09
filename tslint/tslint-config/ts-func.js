module.exports = {
  "rules": {
    // await 不会针对非 promise 返回的函数
    "await-promise": true,
    // 不允许使用 , 运算符 (a, b) 返回 a
    "ban-comma-operator": true,

    // 禁止使用特定的函数或全局方法
    // "ban": [
    //   true,
    //   "eval",
    //   {"name": "$", "message": "please don't"},
    //   ["describe", "only"],
    //   {"name": ["it", "only"], "message": "don't focus tests"},
    //   {
    //     "name": ["chai", "assert", "equal"],
    //     "message": "Use 'strictEqual' instead."
    //   },
    //   {"name": ["*", "forEach"], "message": "Use a regular for loop instead."},
    //   {"name": ["*", "_id", "toString"], "message": "Use 'toHexString' instead."}
    // ]

    // 强制在 if/for/do/while 语句中使用花括号
    // "curly": true

    // 强制在 for in 中使用 if
    // "forin": true,

    // 禁止使用 Function 构造方法
    // function-constructor

    // 禁止引入特定库
    // import-blacklist : [true, 'lodash']

    // label只能用于 do/for/while/switch 表达中.
    // label-position

    // 禁止使用 arguments.callee
    "no-arg": true,

    // 禁止使用位运算
    // "no-bitwise": true

    // 禁止在 do-while, for, if, while 以及三目运算符中使用赋值语句
    "no-conditional-assignment": true,

    // 禁止使用以下console方法
    "no-console": [true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],

    // 禁止使用 String, Number, and Boolean 构造器
    "no-construct": true,

    //禁止使用debugger
    "no-debugger": true,
    // 禁止使用重复的super()
    "no-duplicate-super": true,
    //禁止 switch 中重复的 case
    "no-duplicate-switch-case": true,
    // 不允许块内出现重复的变量声明 只有声明为 var 时起作用
    "no-duplicate-variable": true,

    /**
     * 不允许使用delete删除动态的key 比如
     * var a='b'
     * var c = {b: 3}
     * delete c[a] 是不被允许的
     */
    "no-dynamic-delete": true,
    // 不允许block为空，但是catch,函数可以为空
    "no-empty": [true, "allow-empty-catch", "allow-empty-functions"],
    "no-eval": true, // 不允许eval()
    // 不允许在函数中创建了promise但不处理
    // "no-floating-promises": true

    // 不能使用for in遍历数组
    // "no-for-in-array": true

    // 只能使用packagejson中列出的依赖
    "no-implicit-dependencies": true,

    /**
     * class Foo<T> {
          bar(item: T): void {
              console.log('typeof T: ', typeof item)
          }
        }
        const foo2 = new Foo() // will be wrong
     */
    "no-inferred-empty-object-type": true,

    // 在非模板字符串中使用 ${ 会报错
    // "no-invalid-template-strings": true

    // 禁止在 class 外使用this
    "no-invalid-this": true,

    // 禁止直接定义构造器 new function
    // "no-misused-new": true,

    // 不能使用null, 全部使用undefined 来代替
    "no-null-keyword": true,

    // 不能使用  null|undefined 来声明
    // "no-null-undefined-union": true

    // 禁止在类型声明时使用 as xxx 除了 as any, as unknown
    // "no-object-literal-type-assertion": true

    // 禁止全局名称的使用，更偏向于具体项目
    // no-restricted-globals

    // 不能使用 return await 写法
    "no-return-await": true,

    /**
     * const a = 'no shadow';
        function print() {
            const a = 'shadow'; // TSLint will complain here.
            console.log(a);
        }
        print(); // logs 'shadow'.
     */
    "no-shadowed-variable": true,

    // 禁止显式声明离散的数组
    "no-sparse-arrays": true,
    // 禁止不必要的对象属性key值为字符串 object['a'] 这种会被改写为object.a
    "no-string-literal": true,

    // 不能直接抛出一个字符串
    // "no-string-throw": true,

    // 不能引入依赖包中的具体子模块
    // "no-submodule-imports": true

    // 禁止switch case中没有返回语句
    "no-switch-case-fall-through": true,
    // 禁止相同的表达比较 'a' === 'a'
    "no-tautology-expression": true,
    // 禁止给将属性赋值为this 除了self和解构赋值
    "no-this-assignment":
      [
        true,
        {
          "allowed-names": ["^self$"],
          "allow-destructuring": true
        }
      ],

    /**
     * class 的方法不会自动绑定方法到 该class，比如
     * class a{
     *  public b(){
     *    console.log(this);
     *  }
     * }
     *
     * new a().b() // window or global
     *
     * 所以必须绑定this
     * class a{
     *  public b : () => {
     *    console.log(this)
     *  }
     * }
     *
     * ignore-static 就是不对静态的做要求
     * */
    "no-unbound-method": [true, "ignore-static"],

    // 不允许非必要的自定义类
    // "no-unnecessary-class": true

    // TODO 不允许？？
    // "no-unsafe-any": true

    // 不允许 finally 块中出现 return, continue, break and throws
    "no-unsafe-finally": true,

    // 不允许出现不赋值或不调用函数的语句，但是允许快速空值检查，比如 a && a(), 对象创建 new a()
    "no-unused-expression": [ true, 'allow-fast-null-checks', 'allow-new'],

    // 不允许没有被使用过的 imports, variables, functions and private 成员函数出现
    // "no-unused-variable": true

    // 主要为了限定var出现的位置
    // "no-use-before-declare": true

    // 不能使用 var
    "no-var-keyword": true,

    // 需要声明的时候显式写出void
    // no-void-expression: true,

    // const a = b && c && 'good' 的表达好过 if if if
    // "prefer-conditional-expression": true

    // 使用{...xxx}替代Object.assign
    "prefer-object-spread": true,

    // parseInt在调用的时候需要指出进制
    "radix": true,

    // 加法时必须同时为字符串或者数字
    // "restrict-plus-operands": true,

    // static方法中不能使用this
    // "static-this": true,

    // 限制条件表达式中出现的类型
    // "strict-boolean-expressions": true

    // 针对总是返回true或false的表达式警告
    // strict-type-predicates

    // swich 一定需要一个default
    "switch-default": true,

    // 使用 === !== 代替 == !=，除了null检查
    "triple-equals": [true, "allow-null-check"],

    // typeof 确保比较的字符串永远正确
    "typeof-compare": true,

    // 禁止写不做任何操作的构造器
    "unnecessary-constructor": true,

    // 禁止重新赋值该类型的默认值
    // "use-default-type-parameter": true,

    // 使用 isNaN() 函数来检查NaN，而不是直接比较
    "use-isnan": true,
  }
}