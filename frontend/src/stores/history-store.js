import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useHistoryStore = defineStore('history', () => {
  

  const history = ref([]);
  function setHistory(payload) {
    history.value = payload
  }

  
  return { history, setHistory }
})
