import {
  INIT_SAVE_NOTES_VALUE,
  SAVE_NOTES_VALUE_FAILED,
  SAVE_NOTES_VALUE_SUCCESSFULL,
} from "./actionTypes";

export function initSaveNotesValue(noteValue) {
  console.log(noteValue);
  return {
    type: INIT_SAVE_NOTES_VALUE,
    noteValue,
  };
}

export function initSaveNotesValueSuccessfull(success) {
  return {
    type: SAVE_NOTES_VALUE_SUCCESSFULL,
    success,
  };
}

export function initSaveNotesValueFailed(failed) {
  return {
    type: SAVE_NOTES_VALUE_FAILED,
    failed,
  };
}
