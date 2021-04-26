import React, { useContext } from "react";
import styled from "styled-components";
import { Project } from "../../data/project/project";
import { ProjectsStoreContext } from "../../data/project/projectsStoreContext";

import { AddProjectCard } from "../components/project/addProjectCard";
import { ProjectCard } from "../components/project/projectCard";
import { Screen } from "./Screen";

export const LandingScreen = () => {
	const projectsStore = useContext(ProjectsStoreContext);
	const projects = projectsStore?.projects;

	return (
		<Screen>
			<ProjectsContainer>
				<AddProjectCard />
				<>
					{projects?.map((value: Project, index: number) => {
						console.log(value.tasks);
						return (
							<ProjectCard
								title={value.title}
								tasks={value.tasks}
								key={index}
							/>
						);
					})}
				</>
			</ProjectsContainer>
		</Screen>
	);
};

const ProjectsContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;
