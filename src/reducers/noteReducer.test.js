import expect from 'expect';
import React from 'react';
import * as actions from '../actions/noteActions';
import noteReducer from './noteReducer';

describe('noteReducer', () => {
  it('should add note when CREATE_NOTE_SUCCESS action is dispatched', () => {
    const initial_state = [
      {
        id: 0,
        content: "First note."
      }
    ];

    const new_note = {
      id: 1,
      content: "Second note."
    };

    const action = actions.createNoteSuccess(new_note);

    const new_state = noteReducer(initial_state, action);

    expect(new_state.length).toEqual(2);
    expect(new_state[0].content).toEqual("First note.");
    expect(new_state[1].content).toEqual("Second note.");
  });
});
