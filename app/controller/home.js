'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.set('Access-Control-Allow-Origin', '*')
    ctx.logger.info('some request data: %j', ctx.request.body);
    ctx.body = 'hi, JiuJiu';
  }
}

module.exports = HomeController;
