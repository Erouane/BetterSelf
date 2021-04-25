import React, { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

import { getRandomInteger } from "../../../utils/randomInteger";
import { Colors, getRandomPastelColor } from "../../Theme/colors";
import { Task } from "../../../data/project/task";

interface ProjectCardProps {
	title: string;
	tasks?: Task[];
}

export const ProjectCard = (props: ProjectCardProps) => {
	const randomDelay = getRandomInteger(0, 500);
	const [hoverStyle, hoverApi] = useSpring(() => ({
		from: {
			transform: "scale(1)",
			opacity: 1,
		},
		config: { tension: 400 },
	}));
	const [flipStyle, flipApi] = useSpring(() => ({
		from: {
			transform: "rotateY(90deg)",
		},
		delay: randomDelay,
		config: { tension: 20, mass: 20 },
	}));
	const randomColor = getRandomPastelColor();
	const tasks = props.tasks?.map((value: Task) => {
		return value.title;
	});
	useEffect(() => {
		flipApi.start({
			transform: "rotateY(-360deg)",
			delay: randomDelay,
			config: { tension: 100, mass: 1 },
		});
	});

	return (
		<FlipContainer style={flipStyle}>
			<Container
				onPointerEnter={() => hoverApi.start({ transform: "scale(1.1)" })}
				onPointerLeave={() =>
					hoverApi.start({ transform: "scale(1)", opacity: 1 })
				}
				onPointerUp={() => hoverApi.start({ opacity: 1 })}
				onPointerDown={() => hoverApi.start({ opacity: 0.5 })}
				style={hoverStyle}
				color={randomColor}
			>
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
		</FlipContainer>
	);
};

const Container = styled(animated.div)<{ color: string }>`
	flex-direction: row;
	width: 150px;
	margin: 50px 50px;
	padding: 50px;
	border-radius: 20px;
	background-color: ${(props) => props.color};
	cursor: pointer;
`;

const FlipContainer = styled(animated.div)``;

const Title = styled.h1<{ color: string }>`
	color: ${(props) => props.color};
`;

const TaskName = styled.h2<{ color: string }>`
	color: ${(props) => props.color};
`;
