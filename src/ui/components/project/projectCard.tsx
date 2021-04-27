import React from "react";
import styled from "styled-components";

import { Colors } from "../../Theme/colors";
import { Task } from "../../../data/project/task";
import { AnimatedCard } from "./animatedCard";
import { Routes } from "../../routing/routes";
import { Link } from "react-router-dom";

interface ProjectCardProps {
	title: string;
	tasks?: Task[];
	index: number;
}

export const ProjectCard = (props: ProjectCardProps) => {
	const tasks = props.tasks?.map((value: Task) => {
		return value.title;
	});

	return (
		<AnimatedCard>
			<NoStyleLink to={Routes.PROJECTDETAIL + `/${props.index}`}>
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
			</NoStyleLink>
		</AnimatedCard>
	);
};

const Container = styled.div`
	padding: 50px;
`;

const NoStyleLink = styled(Link)`
	text-decoration: none;
`;

const Title = styled.h1<{ color: string }>`
	color: ${(props) => props.color};
`;

const TaskName = styled.h2<{ color: string }>`
	color: ${(props) => props.color};
`;
