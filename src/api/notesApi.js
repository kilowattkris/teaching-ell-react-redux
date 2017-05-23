import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const notes = [
  {
    id: 1495205033620,
    content: "This is a note."
  },
  {
    id: 1495205048306,
    content: "This is another note."
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

const generateId = (note) => {
  return Date.now();
};

class NoteApi {
  static getAllNotes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], notes));
      }, delay);
    });
  }

  static saveNote(note) {
    note = Object.assign({}, note); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minNoteContentLength = 1;
        if (note.content.length < minNoteContentLength) {
          reject(`Content must be at least ${minNoteContentLength} characters.`);
        }

        if (note.id) {
          const existingNoteIndex = notes.findIndex(a => a.id == note.id);
          notes.splice(existingNoteIndex, 1, note);
        } else {
          //Just simulating creation here.
          //Cloning so copy returned is passed by value rather than by reference.
          note.id = generateId(note);
          notes.push(note);
        }

        resolve(note);
      }, delay);
    });
  }

  static deleteNote(noteId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfNoteToDelete = notes.findIndex(note => {
          note.id == noteId;
        });
        notes.splice(indexOfNoteToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default NoteApi;
