import React, { ReactElement } from "react";
import styled from "styled-components";
import { Colors } from "../Theme/colors";

interface ScreenProps {
  children: ReactElement;
}

export const Screen = (props: ScreenProps) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: ${Colors.primaryColor};
`;
