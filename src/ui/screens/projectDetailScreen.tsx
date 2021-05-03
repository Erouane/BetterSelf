import { useContext } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { ProjectsStoreContext } from "../../data/project/projectsStoreContext";
import { Task } from "../../data/project/task";
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
				<Title color={project?.color}>{project?.title}</Title>
				{project?.tasks.map((value: Task, index: number) => {
					return (
						<TaskName key={index} color={project.color}>
							{value.title}
						</TaskName>
					);
				})}
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

const Title = styled.h1<{ color?: string }>`
	font: 2em Ubuntu;
	margin-bottom: 50px;
	color: ${(props) => props.color};
`;

const TaskName = styled.h2<{ color?: string }>`
	font: 1.5em Ubuntu;
	color: ${(props) => props.color};
`;
