module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        indent: ['error', 4],
        'comma-spacing': ['error', { before: false, after: true }],
    },
};
