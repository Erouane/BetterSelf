import React, { useEffect } from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { getRandomInteger } from "../../../utils/randomInteger";
import { getBrightColor } from "../../Theme/colors";

interface AnimatedLetterProps {
	letter: string;
}

export const AnimatedLetter = (props: AnimatedLetterProps) => {
	const getRandomAngle = () => getRandomInteger(-10, 10);
	const getRandomVector = () => Math.random();
	const randomColor = getBrightColor();
	console.log(randomColor);
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
		wriggleApi.start({ config: { tension: 350, mass: 10, clamp: true } });
	});
	return (
		<Letter style={wriggleStyle} color={randomColor}>
			{props.letter}
		</Letter>
	);
};

const Letter = styled(animated.p)<{ color: string }>`
	color: ${(props) => props.color};
	font-family: UbuntuMono;
	font-size: 3em;
	width: 30px;
`;
