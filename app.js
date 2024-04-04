import dotenv from "dotenv";
import express from "express";
import { router as homePageRoute } from "./routes/home.js";

dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));

app.use("/", homePageRoute);

app.listen("6969");