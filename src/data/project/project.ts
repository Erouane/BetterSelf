import { Task, TaskParams } from "./task";

export interface ProjectParams {
	title: string;
	tasks?: TaskParams[];
}

export class Project {
	private _title: string;
	private _tasks: Task[];

	constructor(params: ProjectParams) {
		this._tasks = params.tasks
			? params.tasks?.map((value: TaskParams) => {
					return new Task(value);
			  })
			: [];
		this._title = params.title;
	}

	public get title(): string {
		return this._title;
	}

	public set title(value: string) {
		this._title = value;
	}

	public get tasks(): Task[] {
		return this._tasks;
	}

	public addTask(params: TaskParams) {
		const task = new Task(params);
		this._tasks.push(task);
	}

	public removeTask(index: number) {
		this._tasks.splice(index);
	}
}
