import type { Note } from '@/interfaces'
import { defineStore } from 'pinia'

export const useNotesStore = defineStore({
  id: 'notes',
  state: () => {
    return {
      notes: [
        { id: 1, description: 'First test note description' },
        { id: 2, description: 'Second test note description' },
      ] as Note[],
    }
  },
  getters: {
    getCharacterLength: state => {
      return (id: number) => {
        const note = state.notes.find(note => note.id === id)

        const noteDescriptionLength = note ? note.description.length : 0

        return noteDescriptionLength === 1
          ? `${noteDescriptionLength} character`
          : `${noteDescriptionLength} characters`
      }
    },
    getNoteDescriptionById: state => {
      return (id: number) => {
        const note = state.notes.find(note => note.id === id)

        return note ? note.description : ''
      }
    },
    getTotalNotesCount: state => {
      return state.notes.length
    },
    getTotalNotesCharactersCount: state => {
      return state.notes.reduce(
        (total, note) => total + note.description.length,
        0,
      )
    },
  },
  actions: {
    addNote(description: string) {
      const newNote = {
        id: this.notes.length + 1,
        description,
      }

      this.notes.unshift(newNote)
    },
    editNote(id: number, description: string) {
      const currentNoteIndex = this.notes.findIndex(note => note.id === id)

      this.notes[currentNoteIndex].description = description
    },
    deleteNote(id: number) {
      this.notes = this.notes.filter(note => {
        return note.id !== id
      })
    },
  },
})
