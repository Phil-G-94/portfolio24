import { Projects } from "../model/projects.js";

const getHomePage = (req, res, next) => {

    Projects.fetchProjects((projects) => {
        res.render("index", { pageTitle: "Projects", path: "/", projects: projects });
    });


};

export { getHomePage };