import RouterPackage from "@koa/router";
const router = new RouterPackage();

// RouterPack in line 1

// const categories = require('./controllers/categories')
// const timer = require('./controllers/timer')

import { listAllCategories, addCategory } from "./controllers/category.js";

router.get("/category", listAllCategories);
router.post("/category", addCategory);

export default router;
