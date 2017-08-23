module.exports = {
    env: {
        mocha: true,
    },
    globals: {
        expect: true,
        assert: true,
    },
    overrides: [{
        files: ['*.spec.js'],
        rules: {
            'no-unused-expressions': [0],
        },
    }],
};
