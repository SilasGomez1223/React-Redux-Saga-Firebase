import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { useEffect } from "react";
import { initGetListData } from "./store/actions";

const NotesList = () => {
  const dispatch = useDispatch();
  const { notesList, isNotesDataFetching } = useSelector(
    (state) => state.NotesListReducer
  );
  useEffect(() => {
    dispatch(initGetListData());
  }, []);
  if (isNotesDataFetching)
    return <div>Notes data is loading ! please wait</div>;
  return (
    <div className="notes-list-wrapper">
      <h1>Notes List</h1>
      <ul>
        {notesList &&
          notesList.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
};

export default NotesList;
