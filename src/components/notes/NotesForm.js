import React, {PropTypes} from 'react';
import { Button, Modal } from 'react-bootstrap';

const NotesForm = ({note, onChange, onSave, show, closeForm}) => {
  return (
    <Modal
      className="new-note-form"
      show={show}
      onHide={closeForm}
      aria-labelledby="contained-modal-title">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">New Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <textarea name="content" cols="46" rows="5" onChange={onChange} value={note.content}/>
          <br></br>
          <input className="btn btn-primary" type="submit" onClick={onSave} value="Save"/>
        </form>
      </Modal.Body>
    </Modal>
  );
};

NotesForm.propTypes = {
  note: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  closeForm: PropTypes.func.isRequired
};

export default NotesForm;
