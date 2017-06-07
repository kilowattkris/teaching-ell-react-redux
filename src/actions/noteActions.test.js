import expect from 'expect';
import React from 'react';
import * as types from './actionTypes';
import * as actions from './noteActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import initialState from '../reducers/initialState';

describe('noteActions', () => {
  describe('createNoteSuccess', () => {
    it('should return a proper createNoteSuccess action', () => {
      const note = {
        id: 0,
        content: "A successfully created note! Hooray!"
      };
      const expected_result = {
        type: types.CREATE_NOTE_SUCCESS,
        note: note
      };
      const actual_result = actions.createNoteSuccess(note);
      expect(actual_result).toEqual(expected_result);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  it('should dispatch BEGIN_AJAX_CALL and LOAD_NOTES_SUCCESS actions when loading notes in', (done) => {
    const store = mockStore(initialState);
    store.dispatch(actions.loadNotes()).then(() => {
      const store_actions = store.getActions();
      expect(store_actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(store_actions[1].type).toEqual(types.LOAD_NOTES_SUCCESS);
      expect(store_actions[1].notes[0].content).toEqual("This is a note.");
      done();
    });
  });
});
