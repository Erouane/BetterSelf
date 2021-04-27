import React, { useContext } from "react";
import styled from "styled-components";
import { Project } from "../../data/project/project";
import { ProjectsStoreContext } from "../../data/project/projectsStoreContext";

import { AddProjectCard } from "../components/project/addProjectCard";
import { ProjectCard } from "../components/project/projectCard";

export const HomeScreen = () => {
	const projectsStore = useContext(ProjectsStoreContext);
	const projects = projectsStore?.projects;

	return (
		<ProjectsContainer>
			<AddProjectCard />
			<>
				{projects?.map((value: Project, index: number) => {
					return (
						<ProjectCard
							title={value.title}
							tasks={value.tasks}
							key={index}
							index={index}
						/>
					);
				})}
			</>
		</ProjectsContainer>
	);
};

const ProjectsContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;
