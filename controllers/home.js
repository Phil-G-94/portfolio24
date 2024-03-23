import { Projects } from "../model/projects.js";

const getHomePage = (req, res, next) => {

    Projects.fetchProjects((projects) => {
        res.render("index", { pageTitle: "Portfolio", path: "/", projects: projects });
    });


};

export { getHomePage };