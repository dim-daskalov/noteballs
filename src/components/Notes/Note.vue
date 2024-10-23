<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card mb-4 note-width">
    <div class="card-content">
      <div class="content wrap-text">
        {{ props.note.description }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ notesStore.getCharacterLength(props.note.id) }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/edit-note/${props.note.id}`" class="card-footer-item">
        Edit
      </RouterLink>
      <a
        href="#"
        role="button"
        @click.prevent="modals.deleteNote = true"
        class="card-footer-item"
        >Delete</a
      >
    </footer>
    <DeleteNoteModal
      v-model="modals.deleteNote"
      v-if="modals.deleteNote"
      :note="props.note"
    >
      <template #modal-buttons>
        <button @click="modals.deleteNote = false" class="button is-link">
          Cancel
        </button>
        <button
          @click="notesStore.deleteNote(props.note.id)"
          class="button is-link has-background-danger ml-2"
        >
          Delete
        </button>
      </template>
    </DeleteNoteModal>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

import { useNotesStore } from '@/stores/notes'
import DeleteNoteModal from './DeleteNoteModal.vue'

const notesStore = useNotesStore()

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
})

const modals = reactive({
  deleteNote: false,
})
</script>

<style scoped>
.note-width {
  width: 22rem;
}

.wrap-text {
  text-wrap: wrap;
  overflow: hidden;
}
</style>
