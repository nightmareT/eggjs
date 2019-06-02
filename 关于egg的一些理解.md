1.egg的目录结构是固定的，controller和service都在自己相应的目录下面完成自己的功能。开发者在符合约定规范的

情况下，可以直接通过ctx访问到这些值。egg使用node的module.exports 和require方法来处理输出和导入功能（此处

很好奇既然已经使用了es6，为什么不直接使用es6自带的import export功能）

2.middleware在await async的帮助下，以同步的方式实现了洋葱模型（union module）

3.this.ctx.curl的功能尚不明确，如何本地调试服务端代码也不明确 

