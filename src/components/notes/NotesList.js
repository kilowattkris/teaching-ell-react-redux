import React, {PropTypes} from 'react';
import Note from './Note';

const NotesList = ({notes, onEdit}) => {
  return (
    <table className="notes-list table">
      <tbody>
        {notes.map(note => <Note key={note.id} note={note} onEdit={onEdit}/>)}
      </tbody>
    </table>
  );
};

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default NotesList;
