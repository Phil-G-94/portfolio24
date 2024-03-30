import express from "express";
import { getProjectDetailPage as projectDetailPageController } from "../controllers/projects.js";

const router = express.Router();

router.get("/projects/:projectId", projectDetailPageController);

export { router };