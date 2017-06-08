import expect from 'expect';
import React from 'react';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as actions from '../actions/noteActions';

describe('Store', () => {
  it('should handle creating a note', () => {
    const store = createStore(rootReducer, initialState);
    const note = { content: "Hello world :)" };

    store.dispatch(actions.createNoteSuccess(note));

    const actual = store.getState().notes[0];

    expect(actual.content).toEqual(note.content);
  });
});
