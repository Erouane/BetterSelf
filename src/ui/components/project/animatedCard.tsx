import React, { ReactElement, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { getRandomInteger } from "../../../utils/randomInteger";
import { getRandomPastelColor } from "../../Theme/colors";

interface AnimatedCardProps {
	children: ReactElement;
}

export const AnimatedCard = (props: AnimatedCardProps) => {
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
				{props.children}
			</Container>
		</FlipContainer>
	);
};

const Container = styled(animated.div)<{ color: string }>`
	flex-direction: row;
	margin: 50px 50px;
	border-radius: 20px;
	background-color: ${(props) => props.color};
	cursor: pointer;
`;

const FlipContainer = styled(animated.div)``;
