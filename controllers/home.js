import { Projects } from "../model/projects.js";

const getHomePage = (req, res, next) => {

    Projects.fetchAllProjectsFromFile((projects) => {
        res.render("index", { pageTitle: "Projects", path: "/", projects: projects });
    });
};

export { getHomePage };