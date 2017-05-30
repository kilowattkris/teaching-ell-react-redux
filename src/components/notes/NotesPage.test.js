import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {NotesPage} from './NotesPage';
import NotesList from './NotesList';

describe('NotesPage', () => {
  const props = {
    notes: [],
    ajaxCallsInProgress: 0,
    saveNote: () => { return new Promise.resolve(); }
  };

  let wrapper = mount(<NotesPage {...props} />);
  it('should have a NotesList component', () => {
    expect(wrapper.find(NotesList).length).toBe(1);
  });
});
