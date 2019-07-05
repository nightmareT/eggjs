'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const jsonp = app.jsonp()
  router.get('/', jsonp, controller.home.index);
  router.get('/createPost', controller.post.create);
};
