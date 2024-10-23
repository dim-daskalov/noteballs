<template>
  <AddEditNote
    v-model="noteContent"
    bg-color="link"
    placeholder-text="Edit note description..."
    label="Edit note"
  >
    <template #buttons>
      <button @click="router.back()" class="button is-link is-light">
        Cancel
      </button>
      <button
        @click="handleSaveNote"
        :disabled="!noteContent"
        class="button is-link has-background-link ml-4"
      >
        Save note
      </button>
    </template>
  </AddEditNote>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useNotesStore } from '@/stores/notes'
import { useRoute, useRouter } from 'vue-router'

import AddEditNote from '@/components/Notes/AddEditNote.vue'

const notesStore = useNotesStore()
const router = useRouter()
const route = useRoute()

const noteContent = ref('')

const updatedNoteId = Number(route.params.id)

const currentNoteDescription = notesStore.getNoteDescriptionById(updatedNoteId)

noteContent.value = currentNoteDescription

const handleSaveNote = () => {
  notesStore.editNote(updatedNoteId, noteContent.value)

  router.push({ name: 'notes' })
}
</script>
