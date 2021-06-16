import React, { ReactElement, useCallback } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import { Colors } from "../Theme/colors";
import { AnimatedTitle } from "../components/animatedTitle/animatedTitle";
import { Button } from "../components/button/button";
import { Spacer } from "../components/spacer";
import { useHistory } from "react-router-dom";
import { Routes } from "../routing/routes";

interface ScreenProps {
	children: ReactElement;
}

export const Screen = observer((props: ScreenProps) => {
	const history = useHistory();
	const redirect = useCallback(() => history.push(Routes.HOME), [history]);

	return (
		<Container>
			<HeaderContainer>
				<TitleContainer onPointerDown={() => redirect()}>
					<AnimatedTitle></AnimatedTitle>
				</TitleContainer>
				<Spacer />
				<ButtonContainer>
					<Button text="Sign in" />
				</ButtonContainer>
				<ButtonContainer>
					<Button text="Login" />
				</ButtonContainer>
			</HeaderContainer>
			{props.children}
		</Container>
	);
});

const Container = styled.div`
display: flex
  flex-direction: row;
	position: absolute;
	height: 100vh;
	width: 100vw;
	background-color: ${Colors.primaryColor};
`;

const HeaderContainer = styled.div`
	margin: 0px -20px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 50px;
	border-bottom: solid 5px;
	border-bottom-color: ${Colors.secondaryColor};
	border-radius: 0px 0px 80px 80px;
`;

const ButtonContainer = styled.div`
	padding: 0px 20px;
`;

const TitleContainer = styled.div`
	cursor: pointer;
`;
