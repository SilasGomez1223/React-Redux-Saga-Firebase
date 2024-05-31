import { takeEvery, call, put } from "redux-saga/effects";
import { INIT_SAVE_NOTES_VALUE } from "./actionTypes";
import axios from "axios";
import {
  initSaveNotesValueFailed,
  initSaveNotesValueSuccessfull,
} from "./actions";

export default function* AddNotesSaga() {
  yield takeEvery(INIT_SAVE_NOTES_VALUE, saveNotesSaga);
}

function* saveNotesSaga(action) {
  const headerParams = {
    "content-type": "application/json",
  };

  const createFinalNotesData = {
    name: action.noteValue,
    id: Math.floor(Math.random() * 100),
  };

  try {
    const response = yield call(
      axios.post,
      "https://react-notes-app-2024-91993-default-rtdb.firebaseio.com/notesList.json",
      createFinalNotesData,
      { headers: headerParams }
    );
    if (response.status === 200) {
      yield put(initSaveNotesValueSuccessfull(true));
    }
  } catch (error) {
    yield put(initSaveNotesValueFailed(true));
  }
}
