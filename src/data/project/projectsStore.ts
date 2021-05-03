import { Project, ProjectParams } from "./project";
import { ProjectPersistLocalManager } from "./projectPersistLocalManager";
import { TaskParams } from "./task";

export class ProjectsStore {
	private _projects: Project[];
	private persistLocalManager: ProjectPersistLocalManager;

	constructor(persistLocalManager: ProjectPersistLocalManager) {
		this.persistLocalManager = persistLocalManager;
		this._projects = this.persistLocalManager.projects;
	}

	public get projects(): Project[] {
		return this._projects;
	}

	public pushData() {
		this.persistLocalManager.projects = this._projects;
		this.persistLocalManager.sendData();
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
