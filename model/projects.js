import { readFile } from "node:fs";
import path from "node:path";

import rootDir from "../utils/path.js";

const p = path.join(rootDir, "portfolio24", "data", "projects.json");

console.log(p);

class Projects {
    static fetchProjects(cb) {
        readFile(p, (err, fileContent) => {

            if (err) {
                return cb([]);
            }

            cb(JSON.parse(fileContent));
        });
    }
}

export { Projects };