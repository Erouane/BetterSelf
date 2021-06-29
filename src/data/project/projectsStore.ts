import { inject, injectable } from "inversify";
import { makeAutoObservable } from "mobx";
import { TYPES } from "../../common/interfaceTypes";
import { Project, ProjectParams } from "./project";
import ProjectAPI from "./projectAPI";
import { TaskParams } from "./task";

@injectable()
export class ProjectsStore {
	private _projects: Project[];
	private projectAPI: ProjectAPI;

	constructor(@inject(TYPES.ProjectAPI) projectAPI: ProjectAPI) {
		this.projectAPI = projectAPI;
		this._projects = [];
		makeAutoObservable(this);
		this.getData();
	}

	public get projects(): Project[] {
		return this._projects;
	}

	public async getData() {
		await this.projectAPI.getData().then((value) => {
			this._projects = value;
		});
		console.log(this._projects);
	}

	public pushData() {
		this.projectAPI.sendData(this._projects);
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
