import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function noteReducer(state, action) {
  switch(action.type){
    case types.CREATE_NOTE:
      return [...state, Object.assign({}, action.note)];

    case types.CREATE_NOTE_SUCCESS:
      return [...state, Object.assign({}, action.note)];

    case types.UPDATE_NOTE_SUCCESS:
      return [
          ...state.filter(note => note.id !== action.note.id),
          Object.assign({}, action.note)
        ]; //need to use spread to create an immutible copy

    case types.LOAD_NOTES_SUCCESS:
      return action.notes;

    default:
      return initialState.notes;
  }
}
