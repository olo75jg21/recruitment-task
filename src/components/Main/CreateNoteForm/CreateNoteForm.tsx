import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addNote, editNote, setCurrentNote } from "../../../store";
import { colors } from "../../../data/colors";

const NoteForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const currentNote = useAppSelector((state) => state.notes.currentNote);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
      setColor(currentNote.color);
    }
  }, [currentNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (currentNote) {
      dispatch(
        editNote({
          ...currentNote,
          title,
          content,
          color,
        })
      );

      dispatch(setCurrentNote(null));
    } else {
      dispatch(
        addNote({
          id: crypto.randomUUID(),
          title,
          content,
          color,
        })
      );
    }

    setTitle("");
    setContent("");
    setColor("");
  };

  const renderColorsSelectOptions = () => {
    return colors.map((c, index) => {
      return (
        <option key={index} value={c} style={{ backgroundColor: c }}></option>
      );
    });
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit} className="note-form">
        <div className="form-row">
          <div className="form-row-item">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-row-item">
            <label htmlFor="color">Color:</label>
            <select
              id="color"
              value={color}
              style={{ backgroundColor: color }}
              onChange={(e) => setColor(e.target.value)}
              required
            >
              <option value="">Select a color</option>
              {renderColorsSelectOptions()}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-row-item">
            <label htmlFor="content">Content:</label>
            <textarea
              rows={4}
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-row submit-btn">
          <button type="submit" className="submit-button">
            {currentNote ? "Edit Note" : "Add Note"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NoteForm;
