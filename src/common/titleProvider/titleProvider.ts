import { injectable } from "inversify";
import { makeAutoObservable } from "mobx";
import * as titleList from "./titleData.json";

@injectable()
export class TitleProvider {
	private _titles: string[];
	private _titleIndex: number;

	constructor() {
		this._titleIndex = 0;
		this._titles = titleList.titles.map((value) => {
			return value.title;
		});
		setInterval(() => {
			this.updateTitle();
		}, 5 * 1000);
		makeAutoObservable(this);
	}

	private updateTitle() {
		if (this._titles.length === this._titleIndex + 1) {
			this._titleIndex = 0;
		} else {
			this._titleIndex++;
		}
		console.log("new title : " + this._titles[this._titleIndex]);
	}

	public getTitle() {
		return this._titles[this._titleIndex];
	}
}
