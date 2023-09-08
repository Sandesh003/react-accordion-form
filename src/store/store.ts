import { configureStore } from '@reduxjs/toolkit';
import questionFormSlice from './slices/questionForm';

export const store = configureStore({
  reducer: {
		questionForm: questionFormSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch