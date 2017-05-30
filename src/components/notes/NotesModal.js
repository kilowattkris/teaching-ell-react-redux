import React, {PropTypes} from 'react';
import {Modal} from 'react-bootstrap';
import NotesForm from './NotesForm';

const NotesModal = ({show, close, onChange, onSave, note, title, saving}) => {
  return (
    <Modal
      className="note-modal"
      show={show}
      onHide={close}
      aria-labelledby="contained-modal-title">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NotesForm onChange={onChange} note={note} onSave={onSave} saving={saving} />
      </Modal.Body>
    </Modal>
  );
};

NotesModal.propTypes = {
  note: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  saving: PropTypes.bool.isRequired
};

export default NotesModal;
