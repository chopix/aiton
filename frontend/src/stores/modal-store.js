import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  

  const modal = ref(0);
  function setModal(payload) {
    modal.value = payload
  }

  
  return { modal, setModal }
})
