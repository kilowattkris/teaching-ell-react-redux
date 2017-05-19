import {combineReducers} from 'redux';
import notes from './noteReducer'; //name appropritately

const rootReducer = combineReducers({
  notes: notes
});

export default rootReducer;
