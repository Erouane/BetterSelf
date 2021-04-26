import React from "react";
import styled from "styled-components";

import { Colors } from "../../Theme/colors";
import { Task } from "../../../data/project/task";
import { AnimatedCard } from "./animatedCard";

interface ProjectCardProps {
	title: string;
	tasks?: Task[];
}

export const ProjectCard = (props: ProjectCardProps) => {
	const tasks = props.tasks?.map((value: Task) => {
		return value.title;
	});

	return (
		<AnimatedCard>
			<Container>
				<Title color={Colors.primaryText}>{props.title}</Title>
				{tasks ? (
					<>
						{tasks.map((value: string, index: number) => {
							return (
								<TaskName color={Colors.primaryText} key={index}>
									{value}
								</TaskName>
							);
						})}
					</>
				) : null}
			</Container>
		</AnimatedCard>
	);
};

const Container = styled.div`
	padding: 50px;
`;

const Title = styled.h1<{ color: string }>`
	color: ${(props) => props.color};
`;

const TaskName = styled.h2<{ color: string }>`
	color: ${(props) => props.color};
`;
