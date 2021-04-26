import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { HomeScreen } from "../screens/homeScreen";
import { Routes } from "./routes";
import { Screen } from "../screens/Screen";
import { CreateProjectScreen } from "../screens/createProjectScreen";

export const AppRoutes = () => {
	return (
		<Screen>
			<Switch>
				<Route exact path="/">
					<Redirect to={Routes.HOME} />
				</Route>
				<Route path={Routes.HOME}>
					<HomeScreen />
				</Route>
				<Route path={Routes.CREATEPROJECT}>
					<CreateProjectScreen />
				</Route>
			</Switch>
		</Screen>
	);
};
