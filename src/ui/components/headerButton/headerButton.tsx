import React from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { Colors, getRandomBrightColor } from "../../Theme/colors";

interface HeaderButtonProps {
	text: string;
}

export const HeaderButton = (props: HeaderButtonProps) => {
	const color = getRandomBrightColor();
	const [opacityStyle, opacityApi] = useSpring(() => ({
		from: {
			opacity: 1,
		},
		config: { tension: 500 },
	}));
	return (
		<Container
			style={opacityStyle}
			color={color}
			onPointerDown={() => opacityApi.start({ opacity: 0.5 })}
			onPointerUp={() => opacityApi.start({ opacity: 1 })}
		>
			<Text>{props.text}</Text>
		</Container>
	);
};

const Container = styled(animated.div)<{ color: string }>`
	padding: 20px;
	margin: 0px 20px;
	border-radius: 20px;
	background-color: ${(props) => props.color};
	cursor: pointer;
`;

const Text = styled.h2`
	font-size: 20px;
	margin: 0px;
	color: ${Colors.primaryText};
`;
