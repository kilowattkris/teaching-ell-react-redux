import expect from 'expect';
import React from 'react';
import * as types from './actionTypes';
import * as actions from './noteActions';

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
