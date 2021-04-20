import React from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { Colors, getRandomCardColor } from "../../Theme/colors";

interface ProjectCardProps {
  title: string;
  tasks?: string[];
}

export const ProjectCard = (props: ProjectCardProps) => {
  const [style, set] = useSpring(() => ({ transform: "scale(1)" }));
  const randomColor = getRandomCardColor();
  const tasks = props.tasks;
  return (
    <Container
      onPointerEnter={() => set({ transform: "scale(1.1)" })}
      onPointerLeave={() => set({ transform: "scale(1)" })}
      onPointerUp={() => set({ transform: "scale(1.1)" })}
      onPointerDown={() => set({ transform: "scale(1)" })}
      style={style}
      color={randomColor}
    >
      <Title color={Colors.primaryText}>{props.title}</Title>
      {tasks ? <Tasks tasks={tasks} /> : null}
    </Container>
  );
};

interface TasksProps {
  tasks: string[];
}

const Tasks = (props: TasksProps) => {
  return (
    <>
      {props.tasks.map((value: string, index: number) => {
        return (
          <Task color={Colors.primaryText} key={index}>
            {value}
          </Task>
        );
      })}
    </>
  );
};

const Container = styled(animated.div)<{ color: string }>`
  flex-direction: row;
  width: 150px;
  margin: 50px 50px;
  padding: 50px;
  border-radius: 20px;
  background-color: ${(props) => props.color};
`;

const Title = styled.h1<{ color: string }>`
  color: ${(props) => props.color};
`;

const Task = styled.h2<{ color: string }>`
  color: ${(props) => props.color};
`;
