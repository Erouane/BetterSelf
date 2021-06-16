import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { container } from "../../../common/container";
import { TitleProvider } from "../../../common/titleProvider/titleProvider";
import { AnimatedLetter } from "./animatedLetter";

interface AnimatedTitleProps {}

export const AnimatedTitle = observer((props: AnimatedTitleProps) => {
	const titleProvider = container.get<TitleProvider>(TitleProvider);
	const title = titleProvider.getTitle();

	const [titleStyle, titleApi] = useSpring(() => ({
		from: {
			x: 400,
			opacity: 0,
		},
	}));
	useEffect(() => {
		titleApi.start({
			from: {
				x: 400,
				opacity: 0,
			},
			config: { tension: 70 },
			to: { x: 0, opacity: 1 },
		});
	}, [title, titleApi]);
	return (
		<Container style={titleStyle}>
			<>
				{[...title].map((value: string, key: number) => {
					return <AnimatedLetter letter={value} key={key} />;
				})}
			</>
		</Container>
	);
});

const Container = styled(animated.div)`
	display: flex;
	flex-direction: row;
`;
