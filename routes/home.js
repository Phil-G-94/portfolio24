import express from "express";
import * as homePageController from "../controllers/home.js";

const router = express.Router();

router.get("/", homePageController.getHomePage);
router.get("/:projectId", homePageController.getProjectDetailPage);

export { router };
