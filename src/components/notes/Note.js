import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const Note = ({note}) => {
  return (
    <tr>
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
