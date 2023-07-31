// get all categories
// add a category
// delete a category
// talks to model

// index.js needs app.use(express.json) as bodyparser before other middleware requests as app.get

"use strict";

import Category from "../models/category.model.js"

export const listAllCategories = async (ctx) => {
  try {
    const categories = await Category.findAll();
    ctx.body = categories;
  } catch (error) {
    ctx.status = 500;
    console.log("internal server error when get all category");
  }
};

export const addCategory = async (ctx) => {
  try {
    const { categoryName } = ctx.request.body;
    await Category.create({
      name: categoryName,
    });

    ctx.status = 200;
  } catch (error) {
    ctx.status = 500;
    console.log("internal server error when posting category");
  }
};
