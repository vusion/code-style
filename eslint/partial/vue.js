module.exports = {
    extends: 'plugin:vue/recommended',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        // Priority A: Essential
        'vue/no-unused-components': [1],
        'vue/no-unused-vars': [1],
        'vue/require-v-for-key': [1],
        'vue/no-use-v-if-with-v-for': [1],
        'vue/no-confusing-v-for-v-if': [0],
        'vue/require-component-is': [0], // @has-bug

        // Priority B: Strongly Recommended
        'vue/html-closing-bracket-newline': [0], // @has-problem
        'vue/html-closing-bracket-spacing': [2],
        'vue/html-indent': [2, 4, {
            baseIndent: 0,
            alignAttributesVertically: false,
            // attribute: 1,
            // closeBracket: 0,
        }],
        'vue/html-self-closing': [2, {
            html: { void: 'never', normal: 'never', component: 'never' },
            svg: 'always',
            math: 'always',
        }],
        'vue/max-attributes-per-line': [0],
        'vue/no-spaces-around-equal-signs-in-attribute': [2],
        'vue/multiline-html-element-content-newline': [0],
        'vue/name-property-casing': [2, 'kebab-case'],
        'vue/singleline-html-element-content-newline': [0],
        'vue/require-default-prop': [0],

        // Priority C: Recommended
        'vue/order-in-components': [1],
        'vue/attributes-order': [0], // Default order is good

        // Uncategorized
        // 'vue/array-bracket-spacing': [2, 'never'],
        'vue/component-name-in-template-casing': [2, 'kebab-case'],
        // 'vue/eqeqeq': [2, 'always'],
        // 'vue/key-spacing': [2],
        // 'vue/match-component-file-name': [2, {
        //     extensions: ['jsx', 'vue'],
        //     shouldMatchCase: true,
        // }],
        // @TODO: 'vue/no-restricted-syntax':
        // 'vue/object-curly-spacing': [2, 'always'],
        // @disagree: vue/require-direct-export
        'vue/script-indent': [2, 4, {
            baseIndent: 0,
            switchCase: 1,
        }],
        // 'vue/space-infix-ops': [2],
        // 'vue/space-unary-ops': [2],
    },
    overrides: [{
        files: ['*.vue'],
        rules: {
            indent: 'off',
        },
    }],
};
