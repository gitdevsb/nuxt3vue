module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:prettier/recommended' // 启用 Prettier 规则
    ],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error' // 将 Prettier 格式问题视为 ESLint 错误
    }
};
 