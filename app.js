import express from "express";
import { router as homePageRoute } from "./routes/home.js";
import { router as projectsPageRoute } from "./routes/projects.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));

app.use("/", homePageRoute);
app.use("/projects", projectsPageRoute);

app.listen("6969");