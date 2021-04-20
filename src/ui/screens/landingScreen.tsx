import React from "react";
import styled from "styled-components";
import { ProjectCard } from "../components/project/projectCard";
import { Screen } from "./Screen";

export const LandingScreen = () => {
  return (
    <Screen>
      <ProjectsContainer>
        <ProjectCard title="Project" tasks={["task1", "task2", "task3"]} />
        <ProjectCard title="Project" tasks={[]} />
        <ProjectCard title="Project" tasks={["task1", "task2"]} />
        <ProjectCard title="Project" tasks={["task1"]} />
        <ProjectCard title="Project" tasks={["task1", "task2"]} />
        <ProjectCard title="Project" tasks={["task1", "task2", "task3"]} />
        <ProjectCard title="Project" tasks={[]} />
        <ProjectCard title="Project" tasks={["task1", "task2"]} />
        <ProjectCard title="Project" tasks={["task1"]} />
        <ProjectCard title="Project" tasks={["task1", "task2"]} />
        <ProjectCard title="Project" tasks={["task1"]} />
        <ProjectCard title="Project" tasks={["task1", "task2"]} />
      </ProjectsContainer>
    </Screen>
  );
};

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
