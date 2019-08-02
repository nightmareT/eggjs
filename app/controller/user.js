'use strict';

const Controller = require('egg').Controller;
const Cookies = require('egg-cookies');


class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.set('Access-Control-Allow-Origin', '*')
    ctx.logger.info('some request data: %j', ctx.request.body);
    const userName = ctx.cookies.get('userName')
    if (ctx.request.body.userName === 'jiujiu') {
      ctx.body = 'check success';
      ctx.logger.info('some request data: %j', 'jiujiu');
      this.ctx.cookies.set('userName', 'jiujiu')
      // 执行service中的数据库操作
      await this.service.user.dataBase()
    } else {
      ctx.body = 'check fail';
    }
  }
}

module.exports = HomeController;
