<template>
  <div class="card p-4 mb-5" :class="`has-background-${props.bgColor}-dark`">
    <label v-if="props.label" class="label has-text-white">
      {{ props.label }}
    </label>
    <div class="field">
      <div class="control">
        <textarea
          v-autofocus
          :value="props.modelValue"
          @input="onInput"
          class="textarea"
          :placeholder="props.placeholderText"
          ref="textareaRef"
          maxlength="100"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: 'success',
  },
  placeholderText: {
    type: String,
    default: 'Add note description...',
  },
  label: {
    type: String,
  },
})

const emit = defineEmits(['update:modelValue'])

const textareaRef = ref()

const onInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLTextAreaElement).value)
}

const focusTextarea = () => {
  textareaRef.value.focus()
}

defineExpose({
  focusTextarea,
})
</script>
