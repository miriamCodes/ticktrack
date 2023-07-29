"use strict";

const Koa = require("koa");

const app = new Koa();
const router = require('./router')
const cors = require("@koa/cors");


// const serve = require('koa-static');
const bodyParser = require("koa-bodyparser");
const sequelize = require("./models");

// const conf = require('./config');

app.use(cors());
// app.use(serve(conf.clientPath));
app.use(bodyParser());
app.use(router.routes());

router.get("/", (ctx) => {
  ctx.body = "hello codeworks!";
});

router.get("status", "/status", (ctx) => {
  ctx.status = 200;
  ctx.body = "ok";
});

app.use(router.routes()).use(router.allowedMethods());

(async () => {
  await sequelize.sync();
  const port = 3001;
  app.listen(port);
  console.log(`i am listening to ${port}`); // eslint-disable-line no-console
})();
