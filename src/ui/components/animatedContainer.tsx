import { animated, useSpring } from "@react-spring/web";
import React, { ReactElement, useEffect } from "react";
import styled from "styled-components";

interface AnimatedContainerProps {
	children: ReactElement;
}

export const AnimatedContainer = (props: AnimatedContainerProps) => {
	const [style, api] = useSpring(() => ({
		from: {
			opacity: 0,
		},
		config: { tension: 50 },
	}));

	useEffect(() => {
		api.start({ to: { opacity: 1 } });
	});

	return <Container style={style}>{props.children}</Container>;
};

const Container = styled(animated.div)``;
