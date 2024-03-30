import { Projects } from "../model/projects.js";

const getProjectDetailPage = (req, res, next) => {
    const projectId = req.params.projectId;

    console.log(projectId);

    Projects.fetchProjectById(projectId, project => {
        console.log(project);

        res.render("project/project-detail", {
            project: project,
            pageTitle: project.title,
            path: "/projects/:projectId"
        });
    });

};

export { getProjectDetailPage };