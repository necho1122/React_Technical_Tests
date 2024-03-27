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
		dispatch(doneTask(index)); // Pasar el índice como argumento
	};

	return (
		<div>
			<h1>Tasks</h1>
			<div className="input-task">
				<input type="text" id="new-task" onKeyDown={addTaskWithEnter} />
				<button type="button" onClick={() => handleAddTask()}>
					Add Task
				</button>
			</div>
			<div className="task-container">
				{tasks.map((task: { text: string; done: boolean }, index: number) => (
					<div key={index} className="task">
						<input
							type="checkbox"
							checked={task.done}
							onChange={() => handleCheck(index)} // Pasar el índice a handleCheck
						/>
						<span className={task.done ? "done-task" : "undone-task"}>
							{task.text}
						</span>
						<button type="button" onClick={() => handleDeleteTask(index)}>
							Delete
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Tasks;
