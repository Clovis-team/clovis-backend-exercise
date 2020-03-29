
module.exports = {
    extends: 'eslint-config-clovis',

    rules: {
        'no-console': 0,
        "semi": ["error", "always"],
    },

    globals: {
        Buffer: true,
    },
}
