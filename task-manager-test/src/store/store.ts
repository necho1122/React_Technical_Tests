import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./myReducerSlice";

export const store = configureStore({
	reducer: {
		myReducer: myReducer,
	},
});
