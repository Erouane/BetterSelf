import React from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { Colors } from "../../Theme/colors";

interface ButtonProps {
	text: string;
	onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
	const [opacityStyle, opacityApi] = useSpring(() => ({
		from: {
			opacity: 1,
		},
		config: { tension: 500 },
	}));
	return (
		<div>
			<Container
				style={opacityStyle}
				color={Colors.secondaryColor}
				onPointerDown={() => opacityApi.start({ opacity: 0.5 })}
				onPointerUp={() => opacityApi.start({ opacity: 1 })}
				onClick={props.onClick}
			>
				<Text>{props.text}</Text>
			</Container>
		</div>
	);
};

const Container = styled(animated.div)<{ color: string; margin?: number }>`
	padding: 20px;
	border-radius: 20px;
	background-color: ${(props) => props.color};
	cursor: pointer;
`;

const Text = styled.h2`
	font-size: 20px;
	margin: 0px;
	color: ${Colors.primaryText};
`;
