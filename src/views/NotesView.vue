<template>
  <AddEditNote v-model="newNote" ref="addEditNoteRef" label="Add new note">
    <template #buttons>
      <button
        @click="handleAddNote"
        :disabled="!newNote"
        class="button is-link has-background-success"
      >
        Add new note
      </button>
    </template>
  </AddEditNote>

  <div
    v-if="notesStore.notes.length"
    class="is-flex is-flex-wrap-wrap is-justify-content-space-evenly"
  >
    <Note v-for="note in notesStore.notes" :key="note.id" :note="note" />
  </div>
  <span
    v-else
    class="is-flex is-justify-content-center is-size-3 has-text-primary"
  >
    No notes available!
  </span>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNotesStore } from '@/stores/notes'
import { useWatchCharacters } from '@/use/useWatchCharacters'

import AddEditNote from '@/components/Notes/AddEditNote.vue'
import Note from '@/components/Notes/Note.vue'

const notesStore = useNotesStore()

const newNote = ref('')
const addEditNoteRef = ref()

const handleAddNote = () => {
  notesStore.addNote(newNote.value)

  newNote.value = ''
  addEditNoteRef.value.focusTextarea()
}

useWatchCharacters(newNote, 100)
</script>
