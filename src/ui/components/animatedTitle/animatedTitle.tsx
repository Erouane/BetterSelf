import React, { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { AnimatedLetter } from "./animatedLetter";

interface AnimatedTitleProps {
	title: string;
}

export const AnimatedTitle = (props: AnimatedTitleProps) => {
	const [titleStyle, titleApi] = useSpring(() => ({
		from: {
			x: 100,
			opacity: 0,
		},
	}));
	useEffect(() => {
		titleApi.start({
			config: { tension: 50 },
			to: { x: 0, opacity: 1 },
		});
	});
	return (
		<Container style={titleStyle}>
			<>
				{[...props.title].map((value: string, key: number) => {
					return <AnimatedLetter letter={value} key={key} />;
				})}
			</>
		</Container>
	);
};

const Container = styled(animated.div)`
	display: flex;
	flex-direction: row;
`;
