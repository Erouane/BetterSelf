import { Project } from "./project";
import { ProjectAPI } from "./projectAPI";

export class ProjectAPILocalManager implements ProjectAPI {
	private _projects: Project[] = [];

	constructor() {
		this.getData();
	}

	public get projects(): Project[] {
		return this._projects;
	}

	public set projects(value: Project[]) {
		this._projects = value;
	}

	public getData() {
		const projectsString = localStorage.getItem("projects");
		this._projects = projectsString ? JSON.parse(projectsString) : [];
	}

	public sendData() {
		const projectsSerialized = JSON.stringify(this._projects);
		console.log(projectsSerialized);
		const projects = projectsSerialized.replace(/_/g, "");
		console.log(projectsSerialized);
		localStorage.setItem("projects", projects);
	}
}
