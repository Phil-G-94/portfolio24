import express from "express";

import { getHomePage as homePageController } from "../controllers/home.js";

const router = express.Router();

router.get("/", homePageController);

export { router };