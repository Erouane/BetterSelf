import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { Colors } from "./ui/Theme/colors";
import { AppRoutes } from "./ui/routing/appRoutes";
import { ProjectsStore } from "./data/project/projectsStore";
import { ProjectsStoreContext } from "./data/project/projectsStoreContext";

function App() {
	const projectsStore = new ProjectsStore();

	projectsStore.addProject({ title: "issou" });
	projectsStore.addProject({
		title: "lmao",
		tasks: [{ title: "task1" }, { title: "task2" }],
	});

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
  height: 100vh;
  width: 100vw;
  overflow: auto;
`;

export default App;
