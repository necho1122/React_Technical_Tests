import "./Tasks.css";
import {
	addTask,
	selectTasks,
	deleteTask,
	doneTask,
} from "../store/myReducerSlice";
import { useDispatch, useSelector } from "react-redux";
import type React from "react";

const Tasks = () => {
	const tasks = useSelector(selectTasks);

	const dispatch = useDispatch();

	const handleAddTask = () => {
		const newTask = (document.getElementById("new-task") as HTMLInputElement)
			?.value;
		dispatch(addTask(newTask));
	};

	const addTaskWithEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleAddTask();
		}
	};

	const handleDeleteTask = (index: number) => {
		dispatch(deleteTask(index));
	};

	const handleCheck = (index: number) => {
		dispatch(doneTask(index));
	};

	return (
		<>
			<div className="tasks-and-lateral">
				<div className="lateral">
					<button type="button">A</button>
					<button type="button">B</button>
					<button type="button">C</button>
				</div>
				<div className="tasks-container-input">
					<h1>Tasks</h1>
					<div className="input-task">
						<input type="text" id="new-task" onKeyDown={addTaskWithEnter} />
						<button type="button" onClick={() => handleAddTask()}>
							Add Task
						</button>
					</div>
					<div className="task-container">
						{tasks.map(
							(task: { text: string; done: boolean }, index: number) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: Avoid using the index of an array as key property in an element. In this case the index is used as key because the tasks are not unique and the order is important.
								<div key={index} className="task">
									<span className={task.done ? "done-task" : "undone-task"}>
										{task.text}
									</span>
									<div className="task-buttons">
										<input
											type="checkbox"
											className="input-checkbox"
											checked={task.done}
											onChange={() => handleCheck(index)}
										/>
										<button
											type="button"
											onClick={() => handleDeleteTask(index)}
										>
											Delete
										</button>
									</div>
								</div>
							),
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Tasks;
