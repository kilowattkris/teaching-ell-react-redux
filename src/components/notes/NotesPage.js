import React, {PropTypes} from 'react';
import NotesList from './NotesList';
import NotesForm from './NotesForm';
import {Button, Modal} from 'react-bootstrap';

class NotesPage extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      note: { content: "" },
      show: false
    };

    this.saveNote = this.saveNote.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.showForm = this.showForm.bind(this);
    this.updateNoteState = this.updateNoteState.bind(this);
  }

  saveNote() {

  }

  updateNoteState (event) {
    const field = event.target.name;
    let note = this.state.note;
    note[field] = event.target.value;
    return this.setState({note: note});
  }

  closeForm() {
    this.setState({ show: false });
  }

  showForm() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="notes-page modal-container">
        <h1>Notes</h1>
        <NotesList notes={this.props.notes} />
        <Button bsStyle="primary" bsSize="large" onClick={this.showForm}>
          Add Note
        </Button>
        <NotesForm onChange={this.updateNoteState} note={this.state.note} show={this.state.show} onSave={this.saveNote} closeForm={this.closeForm} />
      </div>
    );
  }
}

NotesPage.defaultProps = {
  notes: [
    {
      id: 1,
      content: "This is a note."
    },
    {
      id: 2,
      content: "This is another note."
    }
  ]
};

NotesPage.propTypes = {
  notes: PropTypes.array.isRequired
};

export default NotesPage;
