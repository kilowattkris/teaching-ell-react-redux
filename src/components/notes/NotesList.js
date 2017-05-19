import React, {PropTypes} from 'react';
import Note from './Note';

const NotesList = ({notes}) => {
  return (
    <table className="notes-list table">
      <tbody>
        {notes.map(note => <Note key={note.id} note={note}/>)}
      </tbody>
    </table>
  );
};

NotesList.propTypes = {
  notes: PropTypes.array.isRequired
};

export default NotesList;
