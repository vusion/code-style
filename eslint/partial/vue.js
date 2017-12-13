module.exports = {
    extends: 'plugin:vue/recommended',
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    plugins: ['vue'],
    rules: {
        'vue/no-unused-vars': [1],
        'vue/html-indent': [2, 4, {
            attribute: 1,
            closeBracket: 0,
        }],
        'vue/name-property-casing': [2, 'kebab-case'],
        'vue/html-self-closing': [2, {
            html: { void: 'never', normal: 'never', component: 'never' },
            svg: 'always',
            math: 'always',
        }],
        'vue/max-attributes-per-line': [0],
        'vue/require-default-prop': [0],
        'vue/order-in-components': [1],
    },
};
