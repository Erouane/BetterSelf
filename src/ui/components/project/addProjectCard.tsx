import React from "react";
import styled from "styled-components";

import { Colors, getRandomPastelColor } from "../../Theme/colors";
import { AnimatedCard } from "./animatedCard";
import { ReactComponent as PlusIcon } from "../../assets/icons/plusIcon.svg";
import { Link } from "react-router-dom";
import { Routes } from "../../routing/routes";

export const AddProjectCard = () => {
	const randomColor = getRandomPastelColor();
	return (
		<AnimatedCard>
			<Link to={Routes.CREATEPROJECT}>
				<Container color={randomColor}>
					<Icon stroke={Colors.primaryColor} />
				</Container>
			</Link>
		</AnimatedCard>
	);
};

const Container = styled.div<{ color: string }>`
	padding: 50px;
	background-color: ${(props) => props.color};
	border-radius: 20px;
`;

const Icon = styled(PlusIcon)`
	width: 150px;
`;
