import React from "react";
import styled from "styled-components";

import { Colors } from "../../Theme/colors";
import { AnimatedCard } from "./animatedCard";
import { ReactComponent as PlusIcon } from "../../assets/icons/plusIcon.svg";

interface AddProjectCardProps {
	onClick?: () => void;
}

export const AddProjectCard = (props: AddProjectCardProps) => {
	return (
		<AnimatedCard>
			<>
				<PlusIcon stroke={Colors.primaryColor} />
			</>
		</AnimatedCard>
	);
};
