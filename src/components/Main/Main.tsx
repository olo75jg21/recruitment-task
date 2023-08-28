import CreateNoteForm from "./CreateNoteForm/CreateNoteForm";
import NotesList from "./NotesList/NotesList";

const Main: React.FC = () => {
  return (
    <>
      <CreateNoteForm />
      <NotesList />
    </>
  );
};

export default Main;
