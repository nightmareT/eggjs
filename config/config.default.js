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
    csrf: {
      enable: false, // 通过 body 传递 CSRF token 的默认字段为 _csrf
    },
  },

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
