import {combineReducers} from 'redux';
import notes from './noteReducer'; //name appropritately
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  notes: notes,
  ajaxCallsInProgress: ajaxCallsInProgress
});

export default rootReducer;
