import * as types from './actionTypes';
import notesApi from '../api/notesApi';
import {beginAjaxCall} from './ajaxStatusActions';

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
    dispatch(beginAjaxCall());
    return notesApi.saveNote(note).then((savedNote) => {
      dispatch(createNoteSuccess(note));
    }).catch((error) => {
      throw error;
    });
  };
}

export function loadNotes() {
  return function(dispatch){
    dispatch(beginAjaxCall());
    notesApi.getAllNotes().then((notes) => {
      dispatch(loadNotesSuccess(notes));
    }).catch(error => {
      throw error;
    });
  };
}
