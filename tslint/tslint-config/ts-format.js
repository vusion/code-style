module.exports = {
  "rules": {
    // 缩进对齐
    "align": [
      true,
      "statements",
      "parameters",
      "arguments",
      "elements",
      "members"
    ],

    // 单参数箭头函数不需要括号
    "arrow-parens": [
      true, "ban-single-arg-parens"
    ],

    // 文件末尾以换行符结束
    "eofline": true,

    // import 关键字间需要空格
    // "import-spacing": true

    // 4格缩进
    "indent": [true, "spaces", 4],

    // 针对jsdoc
    // "jsdoc-format": true

    // 换行用 \n
    "linebreak-style": [true, "LF"],
    // 一行最多 140 个字符
    "max-line-length": [true, 140],
    // return 另起一行
    // "newline-before-return": true,

    // new 时需要圆括号
    "new-parens": true,

    // 不允许连续的空格
    "no-consecutive-blank-lines": [
      true,
      1
    ],

    // 不允许不寻常的空格符
    "no-irregular-whitespace": true,
    // 末尾不能有空格
    "no-trailing-whitespace": true,
    // .2 => 0.2
    "number-literal-format": true,

    // 强制使用单引号，单引号中可以使用双引号
    "quotemark": [
      true,
      "single",
      "avoid-escape"
    ],

    // 每行以;结束
    "semicolon": [true, "always"],
    // 多行每行必须以,结束
    "trailing-comma": [true, {
      "singleline": "never",
      "multiline": "always"
    }],

    "typedef-whitespace": [true, {
      "call-signature": "nospace",
      "index-signature": "nospace",
      "parameter": "nospace",
      "property-declaration": "nospace",
      "variable-declaration": "nospace"
    }],

    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-separator",
      "check-type",
      "check-type-operator",
      "check-rest-spread"
    ]
  }
}