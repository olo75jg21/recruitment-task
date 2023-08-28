import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./slices/notesSlice";
import {
  addNote,
  removeNote,
  editNote,
  setCurrentNote,
} from "./slices/notesSlice";

const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, addNote, removeNote, editNote, setCurrentNote };
