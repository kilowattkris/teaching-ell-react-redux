import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const Note = ({note, onEdit}) => {
  let date = new Date(Number(note.id));
  let date_str = date.toString();
  return (
    <tr>
      <td className="note-id">{date_str}</td>
      <td className="note-note">{note.content}</td>
      <td className="note-edit">
        <div className="btn btn-primary" onClick={() => onEdit(note)}>Edit</div>
      </td>
    </tr>
  );
};

Note.propTypes = {
  note: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default Note;
