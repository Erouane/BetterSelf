import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import "reflect-metadata";

import { Colors } from "./ui/Theme/colors";
import { AppRoutes } from "./ui/routing/appRoutes";
import { ProjectsStore } from "./data/project/projectsStore";
import { ProjectsStoreContext } from "./data/project/projectsStoreContext";
import { container } from "./common/container";

function App() {
	const projectsStore = container.get(ProjectsStore);

	return (
		document.getElementById("root"),
		(
			<BrowserRouter>
				<MainContainer>
					<ProjectsStoreContext.Provider value={projectsStore}>
						<AppRoutes />
					</ProjectsStoreContext.Provider>
				</MainContainer>
			</BrowserRouter>
		)
	);
}

const MainContainer = styled.div`
  display: flex;
  background-color: ${Colors.primaryColor}

  overflow: scroll;
`;

export default App;
