module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    env: {
        es6: true,
    },
    rules: {
        // Possible Errors
        'for-direction': [2],
        'getter-return': [2],
        'no-async-promise-executor': [2],
        'no-await-in-loop': [2],
        'no-compare-neg-zero': [2],
        'no-cond-assign': [2, 'except-parens'],
        'no-console': [1, { allow: ['info', 'warn', 'error'] }],
        'no-constant-condition': [2],
        'no-control-regex': [2],
        'no-debugger': [0],
        'no-dupe-args': [2],
        'no-dupe-keys': [2],
        'no-duplicate-case': [2],
        'no-empty': [2, { allowEmptyCatch: true }],
        'no-empty-character-class': [2],
        'no-ex-assign': [2],
        'no-extra-boolean-cast': [2],
        // @disagreed: 'no-extra-parens',
        'no-extra-semi': [2],
        'no-func-assign': [2],
        'no-inner-declarations': [2],
        'no-invalid-regexp': [2],
        'no-irregular-whitespace': [2],
        'no-misleading-character-class': [2],
        'no-obj-calls': [2],
        // @disagreed: `hasOwnProperty`; 'no-prototype-builtins',
        'no-regex-spaces': [1],
        'no-sparse-arrays': [1],
        // @disagreed: 'no-template-curly-in-string'
        'no-unexpected-multiline': [2],
        'no-unreachable': [2],
        'no-unsafe-finally': [2],
        'no-unsafe-negation': [2],
        'require-atomic-updates': [2],
        'use-isnan': [2],
        'valid-typeof': [2],

        // Best Practices
        // @TODO: 'accessor-pairs',
        'array-callback-return': [2],
        'block-scoped-var': [2],
        // @unnessesary: 'class-methods-use-this',
        // @useless: 'complexity'
        // @TODO: 'consistent-return': [2, { treatUndefinedAsUnspecified: true }],
        curly: [0, 'multi-or-nest'],
        // @unnessesary: 'default-case': [0],
        'dot-location': [2, 'property'],
        'dot-notation': [1, { allowKeywords: true }],
        eqeqeq: [2, 'always'],
        // @unnessesary: 'guard-for-in',
        // @too-strong: 'max-classes-per-file'
        'no-alert': [1],
        'no-caller': [2],
        'no-case-declarations': [2],
        'no-div-regex': [2],
        // @disagreed: 'no-else-return',
        'no-empty-function': [2],
        'no-empty-pattern': [2],
        'no-eq-null': [2],
        'no-eval': [2],
        // @disagreed: 'no-extend-native',
        'no-extra-bind': [2],
        'no-extra-label': [2],
        // @unnessesary: 'no-fallthrough',
        'no-floating-decimal': [2],
        'no-global-assign': [2],
        // @disagreed: 'no-implicit-coercion',
        // @unnessesary: 'no-implicit-globals',
        'no-implied-eval': [2],
        // @has-problem: 'no-invalid-this: [0],
        'no-iterator': [2],
        'no-labels': [1],
        // @disagreed: 'no-lone-blocks',
        // @has-problem: while(a) {a = find(() => ...)}; 'no-loop-func': [2],
        // @useless: 'no-magic-numbers': [1, { ignore: [0, 1], enforceConst: true }],
        'no-multi-spaces': [2],
        'no-multi-str': [2],
        // @disagreed: 'no-new',
        'no-new-func': [2],
        'no-new-wrappers': [2],
        'no-octal': [2],
        'no-octal-escape': [2],
        // @disagreed: 'no-param-reassign',
        'no-proto': [2],
        'no-redeclare': [2],
        // @useless: 'no-restricted-properties',
        // @disagreed: 'no-return-assign': 'except-parens',
        'no-return-await': [2],
        'no-script-url': [2],
        'no-self-assign': [2],
        'no-self-compare': [2],
        'no-sequences': [2],
        'no-throw-literal': [2],
        'no-unmodified-loop-condition': [1],
        'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
        'no-unused-labels': [2],
        'no-useless-call': [2],
        // @disagreed: no-useless-catch
        'no-useless-concat': [1],
        'no-useless-escape': [2],
        'no-useless-return': [2],
        'no-void': [2],
        // @disagreed: 'no-warning-comments',
        'no-with': [2],
        // @unnessesary: 'prefer-promise-reject-errors',
        radix: [2, 'as-needed'],
        'require-await': [2],
        // @too-strong: require-unicode-regexp
        // @disagreed: 'vars-on-top',
        'wrap-iife': [2, 'inside'],
        yoda: [2, 'never', { exceptRange: true }],

        // Strict Mode
        // @unnessesary: strict,

        // Variables
        // @unnessesary: 'init-declarations',
        'no-catch-shadow': [2],
        'no-delete-var': [2],
        'no-label-var': [2],
        // @TODO: 'no-restricted-globals',
        // @disagreed: 'no-shadow',
        'no-shadow-restricted-names': [2],
        'no-undef': [2],
        'no-undef-init': [2],
        // @unnessesary: 'no-undefined',
        'no-unused-vars': [1, { args: 'none' }],
        'no-use-before-define': [1, { functions: false }],

        // Node.js and CommonJS
        // @TODO: 'callback-return',
        // @TODO: 'global-require',
        // @TODO: 'handle-callback-err',
        // @TODO: 'no-buffer-constructor',
        // @TODO: 'no-mixed-requires',
        'no-new-require': [2],
        // @TODO: 'no-path-concat',
        // @TODO: 'no-process-env',
        // @TODO: 'no-process-exit',
        // @TODO: 'no-restricted-modules',
        // @TODO: 'no-sync',

        // Stylistic Issues
        'array-bracket-newline': [0], // @disagreed: too-strict
        'array-bracket-spacing': [2, 'never'],
        'array-element-newline': [0], // @disagreed: too-strict
        'block-spacing': [2, 'always'],
        'brace-style': [2, '1tbs', { allowSingleLine: true }],
        camelcase: [2],
        // @disagreed: 'capitalized-comments': [2],
        'comma-dangle': [2, 'always-multiline'],
        'comma-spacing': [2],
        'comma-style': [2],
        'computed-property-spacing': [2],
        'consistent-this': [1, 'self'],
        'eol-last': [2],
        'func-call-spacing': [2],
        'func-name-matching': [2],
        // @useless: 'func-names',
        'func-style': [0],
        'function-paren-newline': [2, 'consistent'],
        // @useless: 'id-blacklist',
        // @useless: 'id-length',
        // @useless: 'id-match',
        // @too-strong: 'implicit-arrow-linebreak': ,
        indent: [2, 4, { SwitchCase: 1 }],
        // @useless: 'jsx-quotes',
        'key-spacing': [2],
        'keyword-spacing': [2],
        // @unnessesary: 'line-comment-position': [2],
        'linebreak-style': [2],
        // @TODO: 'lines-around-comment',
        'lines-between-class-members': [2, "always", { exceptAfterSingleLine: true }],
        // @useless: 'max-depth',
        // @useless: 'max-len',
        // @useless: 'max-lines',
        // @useless: 'max-lines-per-function',
        // @useless: 'max-nested-callbacks',
        // @useless: 'max-params',
        // @useless: 'max-statements',
        // @useless: 'max-statements-per-line',
        'multiline-comment-style': [0],
        'multiline-ternary': [2, 'never'],
        'new-cap': [2],
        'new-parens': [1],
        // @disagreed: 'newline-per-chained-call',
        'no-array-constructor': [2],
        // @disagreed: 'no-bitwise',
        // @useless: 'no-continue',
        // @useless: 'no-inline-comments',
        // @disagreed: 'no-lonely-if',
        // @TODO: 'no-mixed-operators'
        'no-mixed-spaces-and-tabs': [2],
        // @disagreed: 'no-multi-assign',
        'no-multiple-empty-lines': [1, { max: 1, maxEOF: 1, maxBOF: 0 }],
        'no-negated-condition': [0],
        'no-nested-ternary': [2],
        'no-new-object': [2],
        // @useless: 'no-plusplus',
        // @TODO: 'no-restricted-syntax',
        'no-tabs': [2],
        // @useless: 'no-ternary',
        'no-trailing-spaces': [2],
        // @disagreed: 'no-underscore-dangle',
        'no-unneeded-ternary': [2, { defaultAssignment: false }],
        'no-whitespace-before-property': [2],
        'nonblock-statement-body-position': [2, 'below'],
        'object-curly-newline': [2],
        'object-curly-spacing': [2, 'always'],
        // @disagreed: 'object-property-newline',
        'one-var': [2, 'never'],
        'one-var-declaration-per-line': [2, 'initializations'],
        // @TODO: 'operator-assignment',
        'operator-linebreak': [2, 'before'],
        'padded-blocks': [2, 'never'],
        'padding-line-between-statements': [2, { blankLine: 'always', prev: 'directive', next: '*' }],
        // @disagree: 'prefer-object-spread': [2],
        'quote-props': [2, 'as-needed'],
        quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        semi: [2, 'always', { omitLastInOneLineBlock: false }],
        'semi-spacing': [2],
        'semi-style': [2],
        // @useless: 'sort-keys',
        // @useless: 'sort-vars',
        'space-before-blocks': [2],
        'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': [2],
        'space-unary-ops': [2],
        'spaced-comment': [1],
        'switch-colon-spacing': [2],
        'template-tag-spacing': [2, 'always'],
        'unicode-bom': [2],
        // @disagreed: 'wrap-regex',

        // ECMAScript 6
        'arrow-body-style': [1, 'as-needed'],
        'arrow-parens': [2, 'always'],
        'arrow-spacing': [2],
        'constructor-super': [2],
        // @TODO: 'generator-star-spacing'
        'no-class-assign': [2],
        // @unnessesary: 'no-confusing-arrow',
        'no-const-assign': [2],
        'no-dupe-class-members': [2],
        'no-duplicate-imports': [1],
        'no-new-symbol': [2],
        // @TODO: 'no-restricted-imports'
        'no-this-before-super': [2],
        'no-useless-computed-key': [2],
        'no-useless-constructor': [2],
        'no-useless-rename': [2],
        'no-var': [2],
        'object-shorthand': [2, 'always'],
        'prefer-arrow-callback': [2],
        'prefer-const': [2, { destructuring: 'all' }],
        // @TODO: 'prefer-destructuring',
        'prefer-numeric-literals': [2],
        'prefer-rest-params': [2],
        'prefer-spread': [2],
        // @has-problem: abc + ''; prefer-template': [1],
        // @TODO: 'require-yield',
        'rest-spread-spacing': [2, 'never'],
        // @useless: 'sort-imports',
        'symbol-description': [2],
        'template-curly-spacing': [2, 'never'],
        'yield-star-spacing': [2],
    },
};
