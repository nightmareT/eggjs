'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  static: {
    enable: true,
  },
  jsonp: {
    enable: true,
    package: 'egg-jsonp',
  }
};
