'use strict';

const Controller = require('egg').Controller;

class loginController extends Controller {
  async checkLogin() {
    const { ctx } = this;
    ctx.body = 'hi, JiuJiu';
  }
}

module.exports = loginController;
