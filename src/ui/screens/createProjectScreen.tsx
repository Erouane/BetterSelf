import { useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ProjectsStoreContext } from "../../data/project/projectsStoreContext";
import { Task, TaskParams } from "../../data/project/task";
import { AnimatedContainer } from "../components/animatedContainer";
import { Button } from "../components/button/button";
import { Routes } from "../routing/routes";
import { Colors, getRandomPastelColor } from "../Theme/colors";

export const CreateProjectScreen = () => {
	const [titleState, setTitleState] = useState<string>("");
	const [tasksState, setTasksState] = useState<Task[]>([
		new Task({ title: "" }),
	]);

	const editTask = (index: number, params: TaskParams) => {
		const updatedTasksState = [...tasksState];
		updatedTasksState[index] = new Task(params);
		setTasksState(updatedTasksState);
	};

	const addTask = (params: TaskParams) => {
		const updatedTasksState = [...tasksState];
		updatedTasksState.push(new Task(params));
		setTasksState(updatedTasksState);
	};

	const history = useHistory();
	const redirect = useCallback(() => history.push(Routes.HOME), [history]);

	const projectsStore = useContext(ProjectsStoreContext);

	return (
		<>
			<AnimatedContainer>
				<Container>
					<>
						<TextInput
							placeholder="Title"
							value={titleState}
							onChange={(event) => setTitleState(event.target.value)}
						/>
						{tasksState.map((value: TaskParams, index: number) => {
							const isLastElement = index === tasksState.length - 1;
							return (
								<>
									{isLastElement ? (
										<TextInput
											placeholder="newTask"
											key={index}
											fontSize={1.5}
											value={value.title}
											onChange={(event) => {
												value.title = event.target.value;
												editTask(index, value);
											}}
											onFocus={() => {
												addTask({ title: "" });
											}}
										/>
									) : (
										<TextInput
											key={index}
											fontSize={1.5}
											value={value.title}
											onChange={(event) => {
												value.title = event.target.value;
												editTask(index, value);
											}}
										/>
									)}
								</>
							);
						})}
						<Button
							text="Create Project"
							onClick={() => {
								const tasks = tasksState.slice();
								tasks.pop();
								projectsStore?.addProject({
									title: titleState,
									tasks: tasks,
									color: getRandomPastelColor(),
								});
								redirect();
							}}
						/>
					</>
				</Container>
			</AnimatedContainer>
		</>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	padding: 50px;
	margin: 20px;
`;

const TextInput = styled.input<{ fontSize?: number }>`
	outline: none;
	font: ${(props) => (props.fontSize ? props.fontSize : 2)}em Arial;
	min-width: 200px;
	border: 2px solid ${Colors.tertiaryColor};
	&:focus {
		border: 2px solid ${Colors.secondaryColor};
	}
	border-radius: 10px;
	padding: 10px;
	margin: 20px 0px;
	box-shadow: inset 0 1px 3px ${Colors.tertiaryColor};
`;
