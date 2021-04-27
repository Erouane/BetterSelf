import { animated, useSpring } from "@react-spring/web";
import { ReactElement } from "react";
import { useDrag } from "react-use-gesture";
import styled from "styled-components";

interface DragContainerProps {
	children: ReactElement;
}

export const DragContainer = (props: DragContainerProps) => {
	const [{ x, y }, api] = useSpring(() => ({
		x: 0,
		y: 0,
	}));

	const bind = useDrag(({ down, offset: [mx, my] }) => {
		api.start({ x: mx, y: my });
	});

	return (
		<AnimatedContainer {...bind()} style={{ x, y }}>
			{props.children}
		</AnimatedContainer>
	);
};

const AnimatedContainer = styled(animated.div)`
	z-index: 1;
`;
