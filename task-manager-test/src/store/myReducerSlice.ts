import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Task {
	text: string;
	done: boolean;
}

const initialState: Task[] = [];

const myReducerSlice = createSlice({
	name: "myReducer",
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<string>) => {
			state.push({ text: action.payload, done: false });
		},
		deleteTask: (state, action: PayloadAction<number>) => {
			state.splice(action.payload, 1);
		},
		doneTask: (state, action: PayloadAction<number>) => {
			const task = state[action.payload];
			if (task) {
				task.done = !task.done;
			}
		},
	},
});

export const { addTask, deleteTask, doneTask } = myReducerSlice.actions;

export default myReducerSlice.reducer;

export const selectTasks = (state) => state.myReducer;
