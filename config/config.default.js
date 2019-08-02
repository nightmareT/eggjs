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
    origin: 'http://127.0.0.1:8080', // 不能设置为* 只能为http://127.0.0.1:8080 不知道为啥
    allowMethods: 'GET,PUT,POST,DELETE',
  }

  config.jsonp = {
    callback: 'callback', // 识别 query 中的 `callback` 参数
    limit: 100, // 函数名最长为 100 个字符
  };

  config.mysql = {
    client: {
        host: '127.0.0.1',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'qwer1456.',
        // 数据库名
        database: 'amer',
      },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
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
