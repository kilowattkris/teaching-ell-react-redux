import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function noteReducer(state = initialState.notes, action) {
  switch(action.type){
    case types.CREATE_NOTE:
      return [...state, Object.assign({}, action.note)];

    default:
      return initialState.notes;
  }
}
