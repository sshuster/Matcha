module.exports = {
    "extends": [
        "react-app",
        "prettier",
    ],
    "env": {
        "browser": true,
        "commonjs": true,
        "node": true,
        "es6": true
    },
    "rules": {
        "jsx-quotes": [1, 'prefer-double'],
        "no-console": 2,
        "CamelCase": {
            "properties": "always",
            "ignoreDestructuring": true
        },
        "no-extra-semi": 2,
        "semi": [2, "never"]
    },
    "plugins": ["prettier"]
};