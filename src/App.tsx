import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { Colors } from "./ui/Theme/colors";
import { AppRoutes } from "./ui/routing/appRoutes";
import { ProjectsStore } from "./data/project/projectsStore";
import { ProjectsStoreContext } from "./data/project/projectsStoreContext";
import { ProjectPersistLocalManager } from "./data/project/projectPersistLocalManager";

function App() {
	const projectpersistLocalManager = new ProjectPersistLocalManager();
	const projectsStore = new ProjectsStore(projectpersistLocalManager);

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
