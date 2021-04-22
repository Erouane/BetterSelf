import React from "react";
import styled from "styled-components";
import { AnimatedTitle } from "../components/animatedTitle/animatedTitle";
import { ProjectCard } from "../components/project/projectCard";
import { Screen } from "./Screen";

export const LandingScreen = () => {
	return (
		<Screen>
			<MainContainer>
				<HeaderContainer>
					<AnimatedTitle title="Have a nice day !"></AnimatedTitle>
				</HeaderContainer>
				<ProjectsContainer>
					<ProjectCard title="Project" tasks={["task1", "task2", "task3"]} />
					<ProjectCard title="Project" tasks={[]} />
					<ProjectCard title="Project" tasks={["task1", "task2"]} />
					<ProjectCard title="Project" tasks={["task1"]} />
					<ProjectCard title="Project" tasks={["task1", "task2"]} />
					<ProjectCard title="Project" tasks={["task1", "task2", "task3"]} />
					<ProjectCard title="Project" tasks={[]} />
					<ProjectCard title="Project" tasks={["task1", "task2"]} />
					<ProjectCard title="Project" tasks={["task1"]} />
					<ProjectCard title="Project" tasks={["task1", "task2"]} />
					<ProjectCard title="Project" tasks={["task1"]} />
					<ProjectCard title="Project" tasks={["task1", "task2"]} />
				</ProjectsContainer>
			</MainContainer>
		</Screen>
	);
};

const MainContainer = styled.div`
  display: flex
  flex-direction: row;
`;

const HeaderContainer = styled.div`
  display: flex
  flex-direction: column;
`;

const ProjectsContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;
