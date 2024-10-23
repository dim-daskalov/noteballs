<template>
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th>Stat</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Number of Notes</td>
        <td>{{ notesStore.getTotalNotesCount }}</td>
      </tr>
      <tr>
        <td>Number of Characters of all notes</td>
        <td>{{ notesStore.getTotalNotesCharactersCount }}</td>
      </tr>
    </tbody>
  </table>
  <input
    v-model="statsInput"
    v-autofocus
    type="text"
    class="input"
    placeholder="Do you like noteballs?"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'

import { useNotesStore } from '@/stores/notes'
import { useWatchCharacters } from '@/use/useWatchCharacters'

const notesStore = useNotesStore()

const statsInput = ref('')

useWatchCharacters(statsInput, 50)
</script>
