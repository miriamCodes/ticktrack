"use strict";

import Koa from "koa";
import router from "./router.js";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";
import sequelize from "./models/index.model.js";

const app = new Koa();

app.use(cors());

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
  console.log(`i am listening to ${port}`);
})();
