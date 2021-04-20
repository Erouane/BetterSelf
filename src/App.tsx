import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { Colors } from "./ui/Theme/colors";
import { AppRoutes } from "./ui/routing/appRoutes";

function App() {
  return (
    document.getElementById("root"),
    (
      <BrowserRouter>
        <MainContainer>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </MainContainer>
      </BrowserRouter>
    )
  );
}

const MainContainer = styled.div`
  display: flex;
  background-color: ${Colors.primaryColor}
  height: 100vh;
  width: 100vw;
  overflow: auto;
`;

export default App;
