import * as types from './actionTypes';
import noteApi from '../api/notesApi';

export function createNote(note) {
  return { type: types.CREATE_NOTE, note: note };
}

export function loadNotesSuccess(notes) {
  return { type: types.LOAD_NOTES_SUCCESS, notes: notes };
}

export function loadNotes() {
  return function(dispatch){
    noteApi.getAllNotes().then((notes) => {
      dispatch(loadNotesSuccess(notes));
    }).catch(error => {
      throw error;
    });
  };
}
