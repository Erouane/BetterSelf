import React, { useEffect } from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { getRandomInteger } from "../../../utils/randomInteger";
import { getRandomBrightColor } from "../../Theme/colors";

interface AnimatedLetterProps {
	letter: string;
}

export const AnimatedLetter = (props: AnimatedLetterProps) => {
	const getRandomAngle = () => getRandomInteger(-10, 10);
	const getRandomVector = () => Math.random();
	const randomColor = getRandomBrightColor();
	const [wriggleStyle, wriggleApi] = useSpring(() => ({
		loop: true,
		to: [
			{
				transform: `rotate3d(${getRandomVector()},${getRandomVector()},${getRandomVector()},${getRandomAngle()}deg)`,
			},
			{
				transform: `rotate3d(${getRandomVector()},${getRandomVector()},${getRandomVector()},${getRandomAngle()}deg)`,
			},
			{
				transform: `rotate3d(${getRandomVector()},${getRandomVector()},${getRandomVector()},${getRandomAngle()}deg)`,
			},
		],
	}));
	useEffect(() => {
		wriggleApi.start({
			config: { tension: getRandomInteger(200, 400), mass: 10, clamp: true },
		});
	});
	return (
		<Letter style={wriggleStyle} color={randomColor}>
			{props.letter}
		</Letter>
	);
};

const Letter = styled(animated.p)<{ color: string }>`
	padding: 0px 10px;
	color: ${(props) => props.color};
	font-family: UbuntuMono;
	font-size: 3em;
	flex-shrink: 1;
`;
