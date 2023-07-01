import express, { Router } from "express";
import { addCate, deleteCate, listAllCate, listOneCate, updateCate } from "../controller/categories";
const routerCategories = express.Router();

routerCategories.get("/categories", listAllCate)
routerCategories.get("/categories/:id", listOneCate)
routerCategories.post("/categories", addCate)
routerCategories.delete("/categories/:id", deleteCate)
routerCategories.put("/categories/:id", updateCate);
export default routerCategories;