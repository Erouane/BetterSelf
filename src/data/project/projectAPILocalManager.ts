import { injectable } from "inversify";
import { Project } from "./project";
import ProjectAPI from "./projectAPI";

@injectable()
export class ProjectAPILocalManager implements ProjectAPI {
	constructor() {
		this.getData();
	}

	public getData(): Promise<Project[]> {
		const projectsString = localStorage.getItem("projects");
		const projects = projectsString ? JSON.parse(projectsString) : [];
		return projects;
	}

	public sendData(projects: Project[]) {
		const projectsSerialized = JSON.stringify(projects);
		const projectsLocal = projectsSerialized.replace(/_/g, "");
		localStorage.setItem("projects", projectsLocal);
	}
}
