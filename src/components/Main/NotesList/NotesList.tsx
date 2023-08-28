import { useAppSelector } from "../../../store/hooks";
import { Note } from "../../../types";
import NoDataCard from "./NoDataCard";
import NotesListItem from "./NotesListItem";

const NotesList: React.FC = () => {
  const notes = useAppSelector((state) => state.notes.data);

  let notesListContent;

  if (!notes.length) {
    notesListContent = (
      <NoDataCard text="There are no notes. Please add one."></NoDataCard>
    );
  } else {
    notesListContent = notes.map((note: Note) => {
      return <NotesListItem key={note.id} note={note} />;
    });
  }

  return (
    <>
      <div className="note-list">{notesListContent}</div>
    </>
  );
};

export default NotesList;
