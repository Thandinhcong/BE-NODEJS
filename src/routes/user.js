import express from "express";
import { Signin, Signup, getUser } from "../controller/users";

const routerUser = express.Router();
routerUser.get("/users", getUser);
routerUser.post("/signup", Signup);
routerUser.post("/signin", Signin);
export default routerUser;