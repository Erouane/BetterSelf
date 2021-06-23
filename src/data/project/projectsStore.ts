import { injectable } from "inversify";
import { Project, ProjectParams } from "./project";
import { ProjectAPI } from "./projectAPI";
import { TaskParams } from "./task";

@injectable()
export class ProjectsStore {
	private _projects: Project[];
	private projectAPI: ProjectAPI;

	constructor(projectAPI: ProjectAPI) {
		this.projectAPI = projectAPI;
		this._projects = this.projectAPI.projects;
	}

	public get projects(): Project[] {
		return this._projects;
	}

	public pushData() {
		this.projectAPI.projects = this._projects;
		this.projectAPI.sendData();
	}

	public addProject(params: ProjectParams) {
		const project = new Project(params);
		this._projects.push(project);
		this.pushData();
	}

	public removeProject(index: number) {
		this._projects.slice(index);
	}

	public addTask(index: number, params: TaskParams) {
		this._projects[index].addTask(params);
	}

	public removeTask(projectIndex: number, taskIndex: number) {
		this._projects[projectIndex].removeTask(taskIndex);
	}
}
