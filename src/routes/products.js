import express from "express";
import { Addproduct, ListAllProduct, ListOneProduct, UpdateProduct, deleteProduct } from "../controller/products";
const routerProduct = express.Router();

routerProduct.get("/products/", ListAllProduct)
routerProduct.get("/products/:id/", ListOneProduct)
routerProduct.post("/products/", Addproduct)
routerProduct.delete("/products/:id/", deleteProduct);
routerProduct.put("/products/:id/", UpdateProduct);


export default routerProduct;