import RouterPackage from "@koa/router";
const router = new RouterPackage();

import {
  listAllCategories,
  addCategory,
  deleteCategory,
} from "./controllers/category.js";

router.get("/category", listAllCategories);
router.post("/category", addCategory);
router.delete("/category", deleteCategory);

export default router;
