import React, {PropTypes} from 'react';
import NotesList from './NotesList';
import NotesModal from './NotesModal';
import {connect} from 'react-redux';
import * as actions from '../../actions/noteActions';

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

  resetNoteState() {
    let note = { content: "" };
    this.setState({note : note});
  }

  saveNote(event) {
    event.preventDefault();
    let note = Object.assign({}, this.state.note);
    note.id = Date.now();
    this.props.createNote(note);
    this.closeForm();
    this.resetNoteState();
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
        <div className="btn btn-lg btn-primary" onClick={this.showForm}>
          Add Note
        </div>
        <NotesModal onChange={this.updateNoteState} note={this.state.note} show={this.state.show} onSave={this.saveNote} close={this.closeForm} title="New Note" />
      </div>
    );
  }
}

NotesPage.propTypes = {
  notes: PropTypes.array.isRequired,
  createNote: PropTypes.func.isRequired
};

function mapStateToProps(state){
  return {
    notes: state.notes
  };
}

function mapDispatchToProps(dispatch){
  return {
    createNote: (note) => {
      dispatch(actions.createNote(note));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesPage);
