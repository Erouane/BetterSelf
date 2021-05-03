import { Project } from "./project";

export interface ProjectPersistManager {
	projects: Project[];
	getData: () => void;
	sendData: () => void;
}
