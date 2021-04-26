import React, { ReactElement } from "react";
import styled from "styled-components";

import { Colors } from "../Theme/colors";
import { AnimatedTitle } from "../components/animatedTitle/animatedTitle";
import { Button } from "../components/button/button";
import { Spacer } from "../components/spacer";

interface ScreenProps {
	children: ReactElement;
}

export const Screen = (props: ScreenProps) => {
	return (
		<Container>
			<HeaderContainer>
				<AnimatedTitle title="You can do it !"></AnimatedTitle>
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
};

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
	padding: 50px;
	border-bottom: solid 5px;
	border-bottom-color: ${Colors.secondaryColor};
	border-radius: 0px 0px 80px 80px;
`;

const ButtonContainer = styled.div`
	padding: 0px 20px;
`;
