/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1559530964852_8285';

  // add your middleware config here
  config.middleware = ['gzip'];

  config.security = {
    csrf: false,
    domainWhiteList:['http://127.0.0.1:8080']
  };

  config.cors = {
    credentials: true,
    origin: 'http://127.0.0.1:8080',
    allowMethods: 'GET,PUT,POST,DELETE',
  }

  config.jsonp = {
    callback: 'callback', // 识别 query 中的 `callback` 参数
    limit: 100, // 函数名最长为 100 个字符
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
