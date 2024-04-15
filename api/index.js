import dotenv from "dotenv";
import express from "express";
import { router as homePageRoute } from "../routes/home.js";

dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views"); // https://stackoverflow.com/questions/78249773/vercel-showing-internal-server-error-after-deploying-express-app-successfully

app.use(express.static("public"));

app.use("/", homePageRoute);

app.listen("6969");

export default app;