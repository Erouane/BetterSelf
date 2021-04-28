import { ReactElement, useEffect, useRef, useState } from "react";
import { animated, useSpring } from "react-spring";
import { useGesture } from "react-use-gesture";
import styled from "styled-components";

interface TiltContainerProps {
	children: ReactElement;
}

export const TiltContainer = (props: TiltContainerProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [widthState, setWidthState] = useState<number>(0);
	const [leftState, setLeftState] = useState<number>(0);
	const [heightState, setHeightState] = useState<number>(0);
	const [topState, setTopState] = useState<number>(0);

	useEffect(() => {
		const currentRef = containerRef.current;
		if (currentRef) {
			const dimensions = currentRef.getBoundingClientRect();
			setWidthState(currentRef.offsetWidth);
			setLeftState(dimensions.left);
			setHeightState(currentRef.offsetHeight);
			setTopState(dimensions.top);
		}
	}, [containerRef, setWidthState, setHeightState]);

	const [{ rotateX, rotateY, x, y }, api] = useSpring(() => ({
		rotateX: 0,
		rotateY: 0,
		x: 0,
		y: 0,
	}));

	const bind = useGesture({
		onHover: () => {
			api.start({
				rotateX: 0,
				rotateY: 0,
			});
		},
		onMove: ({ xy: [mx, my] }) => {
			const x = mx - leftState;
			const y = my - heightState / 2 - topState;

			api.start({
				rotateX: (-y / heightState) * 15,
				rotateY: (x / widthState) * 15,
			});
		},
	});

	return (
		<Container>
			<animated.div
				ref={containerRef}
				{...bind()}
				style={{ rotateX, rotateY, x, y }}
			>
				{props.children}
			</animated.div>
		</Container>
	);
};

const Container = styled.div`
	perspective: 800px;
`;
