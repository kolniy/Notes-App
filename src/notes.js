import uuidv4 from 'uuid/v4'
import moment from 'moment'

let notes = []

// Read existing note from localstorage
const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes');
      // check for existing saved data
    if(notesJSON !== null){
       return JSON.parse(notesJSON);
       } else {
        return []
      }
}

//save note to localstorage
const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes));
}

//Expose notes for module
const getNotes = () => notes 

const createNotes = () => {
    const id = uuidv4()
    const timeInfo = moment()

    notes.push({
        id,
        title:'',
        body: '',
        createdAt: timeInfo.valueOf(),
        updatedAt: timeInfo.valueOf()
    });
    saveNotes()
    
    return id
}

//remove note
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => {
        return note.id === id
    })
  if(noteIndex > -1){
    notes.splice(noteIndex, 1);
    saveNotes()
   }
}

notes = loadNotes()

// sort your notes by one of three ways
const sortNotes = (sortBy) => {
    if(sortBy === 'byEdited'){ 
       return notes.sort((a, b) => {
            if(a.updatedAt > b.updatedAt){
                return -1
            } else if(a.updatedAt < b.updatedAt){
                return 1
            } else {
                return 0
            }
        })
    }else if(sortBy === 'byCreated'){
        return notes.sort((a, b) => {
            if(a.createdAt > b.createdAt){
                return -1
            } else if(a.createdAt < b.createdAt){
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if(a.title.toLowerCase() < b.title.toLowerCase()){
                return -1
            } else if(a.title.toLowerCase() > b.title.toLowerCase()){
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}

const updateNote = (id, updates) => {
    const note = notes.find((note) => note.id === id)

    if(!note){
        return
    }

    if(typeof updates.title === 'string'){
        note.title = updates.title
        note.updatedAt = moment().valueOf()
    }

    if(typeof updates.body === 'string'){
        note.body = updates.body
        note.updatedAt = moment().valueOf()
    }

    saveNotes()
    return note
}

export { getNotes, createNotes, removeNote, sortNotes, updateNote }