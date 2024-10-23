import { watch } from 'vue'
import type { Ref } from 'vue'

export const useWatchCharacters = (
  textElement: Ref<string>,
  allowedCharacters: number,
) => {
  watch(
    () => textElement.value,
    newValue => {
      if (newValue.length === allowedCharacters) {
        alert(`Allowed characters are ${allowedCharacters}!`)
      }
    },
  )
}
