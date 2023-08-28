import { GoPencil, GoTrash } from "react-icons/go";
import { Note } from "../../../types";
import { useAppDispatch } from "../../../store/hooks";
import { removeNote, setCurrentNote } from "../../../store";
import { getTextColor } from "../../../utils";

interface NotesListItemProps {
  note: Note;
}

const NotesListItem: React.FC<NotesListItemProps> = ({ note }) => {
  const dispatch = useAppDispatch();
  const { title, content, color } = note;

  const cardStyle = {
    backgroundColor: color,
  };

  const handleRemoveNote = () => {
    dispatch(removeNote(note));
  };

  const handleSetCurrentNote = () => {
    dispatch(setCurrentNote(note));
  };

  return (
    <>
      <div className="note-card" style={cardStyle}>
        <h3 className="note-title" style={{ color: getTextColor(color) }}>
          {title}
        </h3>
        <p className="note-content" style={{ color: getTextColor(color) }}>
          {content}
        </p>
        <div className="note-actions">
          <button className="edit-button" onClick={handleSetCurrentNote}>
            <GoPencil />
          </button>
          <button className="delete-button" onClick={handleRemoveNote}>
            <GoTrash />
          </button>
        </div>
      </div>
    </>
  );
};

export default NotesListItem;
