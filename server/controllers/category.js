"use strict";

import Category from "../models/category.model.js";

export const listAllCategories = async (ctx) => {
  try {
    const categories = await Category.findAll();
    ctx.body = categories;
    ctx.status = 200;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "internal server error when get all category" };
  }
};

export const addCategory = async (ctx) => {
  console.log(ctx.request.body);
  try {
    const { name } = ctx.request.body;
    console.log("my categoryname", name);
    let categoryName = name;
    if (!categoryName) {
      ctx.status = 400;
      ctx.body = { error: "category name is required" };
      return;
    }
    await Category.create(categoryName);

    ctx.status = 201;
    ctx.body = { message: "new category created successfully" };
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    ctx.body = { error: "internal server error when posting category" };
  }
};

export const deleteCategory = async (ctx) => {
  try {
    const { name: categoryName } = ctx.request.body;
    const category = await Category.findOne({ where: { name: categoryName } });
    console.log("name", categoryName);
    console.log("found category", category);
    console.log("body", ctx.request.body);
    if (!categoryName) {
      ctx.status = 404;
      ctx.body = {
        message: "the category you wanted to delete can not be found",
      };
    } else {
      await category.destroy();
      ctx.status = 200;
      ctx.body = { message: "category deleted successfully" };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: "internal server error when deleting category" };
  }
};
