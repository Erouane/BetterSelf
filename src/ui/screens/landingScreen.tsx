import React from "react";
import styled from "styled-components";
import { AnimatedTitle } from "../components/animatedTitle/animatedTitle";
import { HeaderButton } from "../components/headerButton/headerButton";
import { ProjectCard } from "../components/project/projectCard";
import { Screen } from "./Screen";

export const LandingScreen = () => {
	return (
		<Screen>
			<MainContainer>
				<HeaderContainer>
					<AnimatedTitle title="You can do it !"></AnimatedTitle>
					<Spacer />
					<HeaderButton text="Sign in"></HeaderButton>
					<HeaderButton text="Log in"></HeaderButton>
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
	display: flex;
	flex-direction: row;
	flex-grow: 0;
	padding: 50px;
`;

const ProjectsContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const Spacer = styled.div`
	flex-grow: 1;
`;
