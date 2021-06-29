import axios, { AxiosError, AxiosResponse } from "axios";
import { injectable } from "inversify";
import { action } from "mobx";
import { Project, ProjectParams } from "./project";
import ProjectAPI from "./projectAPI";

@injectable()
export class ProjectAPIRemote implements ProjectAPI {
	constructor() {
		this.getData();
	}

	public async getData(): Promise<Project[]> {
		const projects: Project[] = [];
		await axios
			.get("https://localhost:5001/Project/GetProjects")
			.then((response: AxiosResponse) => {
				const responseData = response.data.data;
				responseData.forEach((data: { title: any; tasks: any; color: any }) => {
					const newProjectsParams: ProjectParams = {
						title: data.title,
						tasks: data.tasks,
						color: data.color,
					};
					const newProject = new Project(newProjectsParams);
					projects.push(newProject);
				});
			})
			.catch((error: AxiosError) => {
				console.error(error);
			});
		return projects;
	}

	public sendData() {}
}
