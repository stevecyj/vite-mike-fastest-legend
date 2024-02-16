import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Dio')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const setName = (str: string) => {
    name.value = str
  }

  return { count, name, doubleCount, increment, setName }
})
