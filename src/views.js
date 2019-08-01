import moment from 'moment'
import { getFilters } from './filters'
import { sortNotes, getNotes } from './notes'

// Generate the DOM structure for a note
const genNoteDOM = (note) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')

    // setup the note title text
    if(note.title.length > 0){
        textEl.textContent = note.title;
    } else {
        textEl.textContent = "Unnamed Note";
    }
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl);

    // Setup the link
    noteEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.classList.add('list-item')

    // Setup the status message
    statusEl.textContent = lastEditedMsg(note.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)

    return noteEl
}

//Render Application notes
const renderNotes = function(){
    const notesEl = document.querySelector("#notes")
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)
    const filteredNotes = notes.filter(function(note) {
       return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    notesEl.innerHTML = ""

    if(filteredNotes.length > 0){
        filteredNotes.forEach(function(note) {
            const noteEl = genNoteDOM(note);
            notesEl.appendChild(noteEl)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No Notes to show'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }
}

// Gen last edited message
const lastEditedMsg = (timestamp) => {
    return `Last Edited : ${moment(timestamp).fromNow()}`
}

const initializeEditPage = (noteId) => {
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const updateInfodisplay = document.querySelector('#upateInfoDisplay')

   const notes = getNotes()
   const note = notes.find((note) => note.id === noteId)  

   if(note === undefined){
      location.assign('/index.html')
   }

   titleElement.value = note.title
   bodyElement.value = note.body
   updateInfodisplay.textContent = lastEditedMsg(note.updatedAt)
}

export { genNoteDOM, renderNotes, lastEditedMsg, initializeEditPage }