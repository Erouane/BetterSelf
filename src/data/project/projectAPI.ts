import { Project } from "./project";

export interface ProjectAPI {
	projects: Project[];
	getData: () => void;
	sendData: () => void;
}
