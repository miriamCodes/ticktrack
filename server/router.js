const Router = require("@koa/router");
const router = new Router();

// const categories = require('./controllers/categories')
// const timer = require('./controllers/timer')

const { listAllCategories, addCategory } = require("./controllers/category");

router.get("/category", listAllCategories);
router.post("/category", addCategory);

module.exports = router;
