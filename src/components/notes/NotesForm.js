import React, {PropTypes} from 'react';
import TextArea from '../common/TextArea';

const NotesForm = ({note, onChange, onSave}) => {
  return (
    <form>
      <TextArea name="content" onChange={onChange} value={note.content}/>
      <input className="btn btn-primary" type="submit" onClick={onSave} value="Save"/>
    </form>
  );
};

NotesForm.propTypes = {
  note: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default NotesForm;
