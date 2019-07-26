'use strict';

const Controller = require('egg').Controller;
const Cookies = require('egg-cookies');


class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.set('Access-Control-Allow-Origin', '*')
    ctx.logger.info('some request data: %j', ctx.request.body);
    if (ctx.request.body.userName === 'jiujiu') {
      ctx.body = 'check success';
      this.ctx.cookies.set('userName', 'jiujiu')
      debugger
    } else {
      ctx.body = 'check fail';
    }
  }
}

module.exports = HomeController;
