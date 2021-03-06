import React, { ReactElement, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { getRandomInteger } from "../../../utils/randomInteger";
import { getRandomPastelColor } from "../../Theme/colors";
import { TiltContainer } from "../tiltContainer";

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
			opacity: 0,
		},
		delay: randomDelay,
		config: { tension: 20, mass: 20 },
	}));

	useEffect(() => {
		flipApi.start({
			transform: "rotateY(-360deg)",
			opacity: 1,
			delay: randomDelay,
			config: { tension: 100, mass: 1 },
		});
	});

	return (
		<MainContainer>
			<FlipContainer style={flipStyle}>
				<TiltContainer>
					<Container
						onPointerEnter={() => hoverApi.start({ transform: "scale(1.1)" })}
						onPointerLeave={() =>
							hoverApi.start({ transform: "scale(1)", opacity: 1 })
						}
						onPointerUp={() => hoverApi.start({ opacity: 1 })}
						onPointerDown={() => hoverApi.start({ opacity: 0.5 })}
						style={hoverStyle}
					>
						{props.children}
					</Container>
				</TiltContainer>
			</FlipContainer>
		</MainContainer>
	);
};

const MainContainer = styled.div`
	margin: 50px 50px;
	max-width: 500px;
`;

const Container = styled(animated.div)`
	flex-direction: row;
	cursor: pointer;
`;

const FlipContainer = styled(animated.div)``;
