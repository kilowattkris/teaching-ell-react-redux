import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const Note = ({note}) => {
  let date = new Date(Number(note.id));
  let date_str = date.toString();
  return (
    <tr>
      <td>{date_str}</td>
      <td>{note.content}</td>
      {/*<td>
        <Link className="btn btn-primary" to={'/notes/'+note.id}>Edit</Link>
      </td>*/}
    </tr>
  );
};

Note.propTypes = {
  note: PropTypes.object.isRequired
};

export default Note;
