import React, {PropTypes} from 'react';
import TextArea from '../common/TextArea';

const NotesForm = ({note, onChange, onSave, saving, errors}) => {
  let save_btn_text = saving ? 'Saving...' : 'Save';
  return (
    <form>
      <TextArea name="content" onChange={onChange} value={note.content} error={errors.content} />
      <input className="btn btn-primary" type="submit" onClick={onSave} value={save_btn_text} />
    </form>
  );
};

NotesForm.propTypes = {
  note: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  errors: PropTypes.object
};

export default NotesForm;
