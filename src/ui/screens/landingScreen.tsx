import React, { useContext } from "react";
import styled from "styled-components";
import { Project } from "../../data/project/project";
import { ProjectsStoreContext } from "../../data/project/projectsStoreContext";
import { AnimatedTitle } from "../components/animatedTitle/animatedTitle";
import { HeaderButton } from "../components/headerButton/headerButton";
import { ProjectCard } from "../components/project/projectCard";
import { Colors } from "../Theme/colors";
import { Screen } from "./Screen";

export const LandingScreen = () => {
	const projectsStore = useContext(ProjectsStoreContext);
	const projects = projectsStore?.projects;

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
	margin: 0px -20px;
	display: flex;
	flex-direction: row;
	padding: 50px;
	border-bottom: solid 5px;
	border-bottom-color: ${Colors.secondaryColor};
	border-radius: 0px 0px 80px 80px;
`;

const ProjectsContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const Spacer = styled.div`
	flex-grow: 1;
`;
