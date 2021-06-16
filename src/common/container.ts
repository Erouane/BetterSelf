import { Container } from "inversify";
import "reflect-metadata";
import { TYPES } from "./interfaceTypes";
import { TitleProvider } from "./titleProvider/titleProvider";

export const container = new Container();

container.bind(TitleProvider).toSelf().inSingletonScope();
