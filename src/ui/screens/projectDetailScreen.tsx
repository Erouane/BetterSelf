import { useContext } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { ProjectsStoreContext } from "../../data/project/projectsStoreContext";
import { AnimatedContainer } from "../components/animatedContainer";

interface ProjectDetailScreenParams {
	id: string;
}

export const ProjectDetailScreen = () => {
	const { id } = useParams<ProjectDetailScreenParams>();
	const projectsStore = useContext(ProjectsStoreContext);
	const project = projectsStore?.projects[+id];

	return (
		<AnimatedContainer>
			<Container>
				<Title>{project?.title}</Title>
			</Container>
		</AnimatedContainer>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	padding: 50px;
	margin: 20px;
`;

const Title = styled.h1`
	font-family: 2em Ubuntu;
`;
