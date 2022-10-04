module.exports = {
    globals: {
        __PATH_PREFIX__: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'react-app',
    ],
    plugins: ['@typescript-eslint', 'react', 'prettier'],
    rules: {
        'react/prop-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'on',
        'prettier/prettier': 2,
    },
};
