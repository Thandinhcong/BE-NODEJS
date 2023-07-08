import express from "express";
import { } from "../controller/users";
import { ListAllSizes, ListOneSize, addSize, deleteSize, updateSize } from "../controller/sizes";

const routerSizes = express.Router();
routerSizes.get("/sizes", ListAllSizes);
routerSizes.get("/sizes/:id", ListOneSize);
routerSizes.post("/sizes/", addSize);
routerSizes.delete("/sizes/:id", deleteSize);
routerSizes.put("/sizes/:id", updateSize);

export default routerSizes;