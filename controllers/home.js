import { Projects } from "../model/projects.js";

const getHomePage = (req, res, next) => {
    Projects.fetchAllProjectsFromFile((projects) => {
        res.render("views/index", {
            pageTitle: "Projects",
            path: "/",
            projects: projects,
        });
    });
};

const getProjectDetailPage = (req, res, next) => {
    const projectId = req.params.projectId;

    Projects.fetchProjectById(projectId, (project) => {
        if (project === undefined) {
            return;
        }

        res.render("views/project-detail", {
            project: project,
            pageTitle: project.title,
            path: `/project/${project.id}`,
        });
    });

    // res.redirect("/");
};

export { getProjectDetailPage, getHomePage };
