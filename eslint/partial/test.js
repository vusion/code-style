module.exports = {
    env: {
        mocha: true,
    },
    globals: {
        expect: true,
        assert: true,
    },
    plugins: ['chai-friendly'],
    rules: {
        'no-unused-expressions': [0],
        'chai-friendly/no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
    },
};
