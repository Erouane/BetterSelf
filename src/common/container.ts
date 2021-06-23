import { Container } from "inversify";
import "reflect-metadata";
import { ProjectAPI } from "../data/project/projectAPI";
import { ProjectAPILocalManager } from "../data/project/projectAPILocalManager";
import { TYPES } from "./interfaceTypes";
import { TitleProvider } from "./titleProvider/titleProvider";

export const container = new Container();

container.bind(TitleProvider).toSelf().inSingletonScope();
container.bind<ProjectAPI>(TYPES.ProjectAPI).to(ProjectAPILocalManager);
