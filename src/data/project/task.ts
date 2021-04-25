export interface TaskParams {
	title: string;
}

export class Task {
	private _title: string;
	private _done: boolean;
	private _startDate: number;

	constructor(params: TaskParams) {
		this._title = params.title;
		this._done = false;
		this._startDate = Date.now();
	}

	public get title(): string {
		return this._title;
	}
	public set title(value: string) {
		this._title = value;
	}

	public get startDate(): number {
		return this._startDate;
	}

	public get done(): boolean {
		return this._done;
	}
	public set done(value: boolean) {
		this._done = value;
	}
}
