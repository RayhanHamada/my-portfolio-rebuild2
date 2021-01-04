/* eslint-disable @typescript-eslint/no-var-requires */
const { DotenvCmdWebpack } = require('dotenv-cmd-webpack');
const { resolve } = require('path');
/**
 * @typedef {import('@vue/cli-service').ConfigFunction} ConfigFunction
 * @type {ConfigFunction}
 */
const config = () => {
  if (process.env.NODE_ENV === 'development') {
    return {
      configureWebpack: {
        mode: 'development',
        plugins: [
          new DotenvCmdWebpack({
            filePath: resolve(__dirname, '.env.json'),
            env: 'dev',
            debug: true,
          }),
        ],
      },
    };
  }

  return {};
};

module.exports = config;
