import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routerUser from "./routes/user";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", routerUser);
mongoose.connect('mongodb://127.0.0.1:27017/new')


export const viteNodeApp = app;