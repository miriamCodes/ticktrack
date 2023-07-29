'use strict'

const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

// const serve = require('koa-static');
// const bodyParser = require('koa-bodyparser');

// const conf = require('./config');

const port = 3000;

// app.use(serve(conf.clientPath));
// app.use(bodyParser());
app.use(router.routes());

app.listen(port, () => {
  console.log(`i am listening to ${port}`);
});

app.use(async ctx => {
  ctx.body = 'Hello World';
});

router.get('/', (ctx) => {
  ctx.body = 'hello codeworks!';
});

router.get('status', '/status', (ctx) => {
  ctx.status = 200;
  ctx.body   = 'ok';
})

app
  .use(router.routes())
  .use(router.allowedMethods());