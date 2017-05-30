import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import NotesForm from './NotesForm';

function setup(saving) {
  //set up some default props to build the shallow render of the notesform
  const props = {
    note: { content: "" },
    saving: saving,
    onChange: () => {},
    onSave: () => {}
  };

  return shallow(<NotesForm {...props} />);
}

describe('NotesForm', () => {
  it('should have a form', () => {
    let wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
  });
  it('should have a save btn that defaults to \'Save\'', () => {
    let wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });
  it('should have a save btn that says \'Saving...\' when saving', () => {
    let wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});
