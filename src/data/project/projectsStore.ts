import { makeAutoObservable } from "mobx";
import { Project, ProjectParams } from "./project";

export class ProjectsStore {
	private _projects: Project[];

	constructor() {
		makeAutoObservable(this);
		this._projects = [];
	}

	public get projects(): Project[] {
		return this._projects;
	}

	public addProject(params: ProjectParams) {
		const project = new Project(params);
		this._projects.push(project);
	}

	public removeProject(index: number) {
		this._projects.slice(index);
	}
}
