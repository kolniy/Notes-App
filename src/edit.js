import { initializeEditPage, lastEditedMsg } from './views'
import { updateNote, removeNote } from './notes'

const noteId = location.hash.substring(1)
const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const updateInfodisplay = document.querySelector('#upateInfoDisplay')

initializeEditPage(noteId)

titleElement.addEventListener('input', (e) => {
   const note = updateNote(noteId, {
        title: e.target.value
    })
    updateInfodisplay.textContent = lastEditedMsg(note.updatedAt)
})

bodyElement.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    updateInfodisplay.textContent = lastEditedMsg(note.updatedAt)
})



document.querySelector('#remove-note').addEventListener('click', () => {
        removeNote(noteId)
        location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
  if(e.key === 'notes'){
     initializeEditPage(noteId)
  }
})
