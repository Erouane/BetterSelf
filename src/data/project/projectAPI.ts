import { Project } from "./project";

export default interface ProjectAPI {
	getData: () => Promise<Project[]>;
	sendData: (projects: Project[]) => void;
}
