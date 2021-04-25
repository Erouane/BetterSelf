import { createContext } from "react";
import { ProjectsStore } from "./projectsStore";

export const ProjectsStoreContext = createContext<ProjectsStore | null>(null);
