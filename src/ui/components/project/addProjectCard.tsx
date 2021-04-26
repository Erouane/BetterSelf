import React from "react";
import styled from "styled-components";

import { Colors } from "../../Theme/colors";
import { AnimatedCard } from "./animatedCard";
import { ReactComponent as PlusIcon } from "../../assets/icons/plusIcon.svg";
import { Link } from "react-router-dom";
import { Routes } from "../../routing/routes";

export const AddProjectCard = () => {
	return (
		<AnimatedCard>
			<Link to={Routes.CREATEPROJECT}>
				<Container>
					<Icon stroke={Colors.primaryColor} />
				</Container>
			</Link>
		</AnimatedCard>
	);
};

const Container = styled.div`
	padding: 50px;
`;

const Icon = styled(PlusIcon)`
	width: 150px;
`;
