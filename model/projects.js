import { readFile } from "node:fs";
import path from "node:path";

import rootDir from "../utils/path.js";

const p = path.join(rootDir, "portfolio24", "data", "projects.json");

const getProjectsFromFile = (cb) => {
    readFile(p, (err, fileContent) => {

        if (err) {
            return cb([]);
        }

        cb(JSON.parse(fileContent));
    });
};

class Projects {

    static fetchAllProjectsFromFile(cb) {
        getProjectsFromFile(cb);
    }

    static fetchProjectById(id, cb) {

        getProjectsFromFile(projects => {
            const project = projects.find(project => project.id === id);

            cb(project);
        });

    }
}

export { Projects };