import * as types from '../actions/actionTypes';

export default function noteReducer(state = [], action) {
  switch(action.type){
    case types.CREATE_NOTE:
      return [...state, Object.assign({}, action.note)];

    default:
      return state;
  }
}
