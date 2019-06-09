module.exports = {
    "rules": {
        // 循环复杂度
        // "cyclomatic-complexity": [true, 20]

        // 字面意思
        // deprecation: true

        // 单文件中可以定义的类型数
        // "max-classes-per-file": [true, 1]

        // 单个文件最大行数
        // "max-file-line-count": [true, 300]

        // 不允许export default
        "no-default-export": true,

        // 不允许引入 default
        // no-default-import

        // 不允许重复引入同一个模块
        "no-duplicate-imports": true,

        // 不允许单文件中出现可融合的namespace
        // "no-mergeable-namespac"

        // 不允许 require().
        // "no-require-imports": true,

        // 强制定义对象的时候key遵循字母排序
        // "object-literal-sort-keys": true,

        // 比起let var 更偏向于const
        "prefer-const": true,

        // 私有变量倾向于是readonly
        // "prefer-readonly": true
    }
}