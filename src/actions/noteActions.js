import * as types from './actionTypes';
import notesApi from '../api/notesApi';

export function createNote(note) {
  return { type: types.CREATE_NOTE, note: note };
}

export function createNoteSuccess(note) {
  return { type: types.CREATE_NOTE_SUCCESS, note: note };
}

export function loadNotesSuccess(notes) {
  return { type: types.LOAD_NOTES_SUCCESS, notes: notes };
}

export function saveNote(note){
  return function(dispatch, getState){
    return notesApi.saveNote(note).then((savedNote) => {
      dispatch(createNoteSuccess(note));
    }).catch((error) => {
      throw error;
    });
  };
}

export function loadNotes() {
  return function(dispatch){
    notesApi.getAllNotes().then((notes) => {
      dispatch(loadNotesSuccess(notes));
    }).catch(error => {
      throw error;
    });
  };
}
