// app/middleware/gzip.js
const isJSON = require('koa-is-json');
const zlib = require('zlib');

module.exports = options => {
  return async function gzip(ctx, next) {
    await next()
    // ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080')
    // ctx.status = 200
  };
};