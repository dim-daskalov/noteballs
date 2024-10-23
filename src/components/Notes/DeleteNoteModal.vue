<template>
  <div class="modal is-active p-4">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete note</p>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete ''{{ props.note.description }}''
      </section>
      <footer class="modal-card-foot field is-grouped is-grouped-right">
        <slot name="modal-buttons" />
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside, onKeyStroke } from '@vueuse/core'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  note: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const closeModal = () => {
  emit('update:modelValue', false)
}

const modalRef = ref(null)

onClickOutside(modalRef, closeModal)

onKeyStroke(['Escape'], e => {
  e.preventDefault()
  closeModal()
})
</script>
