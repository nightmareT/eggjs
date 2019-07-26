'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.set('Access-Control-Allow-Origin', '*')
    ctx.logger.info('some request data: %j', ctx.request.body);
    const userName = ctx.cookies.get('userName')
    if (userName && userName ==='jiujiu') {
      ctx.body = 'hi, JiuJiu';
    } else {
      ctx.body = 'please, login'
    }
  }
}

module.exports = HomeController;
