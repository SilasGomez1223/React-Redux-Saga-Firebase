import { call, put, takeEvery } from "redux-saga/effects";
import { INIT_GET_LIST_DATA } from "./actionTypes";
import axios from "axios";
import {
  initFetchingGetListDataFailed,
  initFetchingGetListDataSuccessfull,
  initFetchingGetListData,
} from "./actions";

export default function* NotesListSaga() {
  yield takeEvery(INIT_GET_LIST_DATA, getNotesListSaga);
}

function* getNotesListSaga() {
  yield put(initFetchingGetListData());
  try {
    const response = yield call(
      axios.get,
      "https://react-notes-app-2024-91993-default-rtdb.firebaseio.com/notesList.json"
    );
    if (response && response.status === 200) {
      const { data } = response;
      const createData = [];
      for (const key in data) createData.push(data[key]);

      yield put(initFetchingGetListDataSuccessfull(createData));
    }
  } catch (error) {
    yield put(initFetchingGetListDataFailed());
  }
}
