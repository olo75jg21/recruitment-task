import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../../types";

interface NotesState {
  data: Note[];
  currentNote: Note | null;
}

const initialState: NotesState = {
  data: [],
  currentNote: null,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.data.push(action.payload);
    },
    removeNote: (state, action: PayloadAction<Note>) => {
      const index = state.data.findIndex(
        (note) => note.id === action.payload.id
      );
      state.data.splice(index, 1);
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const index = state.data.findIndex(
        (note) => note.id === action.payload.id
      );
      state.data[index] = action.payload;
    },
    setCurrentNote: (state, action: PayloadAction<Note | null>) => {
      state.currentNote = action.payload;
    },
  },
});

export const { addNote, removeNote, editNote, setCurrentNote } =
  notesSlice.actions;
export default notesSlice.reducer;
