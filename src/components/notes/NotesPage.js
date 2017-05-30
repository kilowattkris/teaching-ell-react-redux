import React, {PropTypes} from 'react';
import NotesList from './NotesList';
import NotesModal from './NotesModal';
import Loader from '../common/Loader';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/noteActions';
import toastr from 'toastr';

class NotesPage extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      note: { content: "" },
      show: false,
      saving: false,
      errors: {}
    };

    this.saveNote = this.saveNote.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.showForm = this.showForm.bind(this);
    this.updateNoteState = this.updateNoteState.bind(this);
    this.isNotesFormValid = this.isNotesFormValid.bind(this);
  }

  resetNoteState() {
    let note = { content: "" };
    this.setState({note : note});
  }

  isNotesFormValid() {
    let ret = true;
    let errors = {};
    if(this.state.note.content.length < 1){
      ret = false;
      errors.content = "Note must be at least 1 character long.";
    }
    console.log(ret);
    this.setState({ errors: errors });
    return ret;
  }

  saveNote(event) {
    event.preventDefault();

    if(!this.isNotesFormValid()){
      return; //don't proceed is the notesForm is invalid
    }

    this.setState({saving: true});
    let note = Object.assign({}, this.state.note);
    note.id = Date.now();
    console.log(this.props.saveNote);
    this.props.saveNote(note).then(() => {
      this.closeForm();
      this.setState({saving: false});
      this.resetNoteState();
      toastr.success('Note Saved!');
    }).catch((error) => {
        this.setState({saving: false});
        this.resetNoteState();
        toastr.error(error);
      }
    );
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
        {this.props.ajaxCallsInProgress > 0 && <Loader />}
        <div className="btn btn-lg btn-primary" onClick={this.showForm}>
          Add Note
        </div>
        <NotesModal onChange={this.updateNoteState} note={this.state.note} show={this.state.show} onSave={this.saveNote} close={this.closeForm} title="New Note" saving={this.state.saving} errors={this.state.errors} />
      </div>
    );
  }
}

NotesPage.propTypes = {
  notes: PropTypes.array.isRequired,
  ajaxCallsInProgress: PropTypes.number.isRequired,
  saveNote: PropTypes.func.isRequired
};

function mapStateToProps(state){
  return {
    notes: state.notes,
    ajaxCallsInProgress: state.ajaxCallsInProgress
  };
}

function mapDispatchToProps(dispatch){
  return {
    saveNote: (note) => {
      return dispatch(actions.saveNote(note));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesPage);
