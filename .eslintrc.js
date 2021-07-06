const config = {
  env: {
    jest: true,
  },
  root: true,
  plugins: ['jest'],
  extends: ['@jdp-dev/eslint-config-typescript-react'],
  rules: {
    // TODO: remove rule and fix
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}

module.exports = config
