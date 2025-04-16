import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  

  const modal = ref(0);
  const setModal = (value) => {
    modal.value = value;
  };

  
  return { modal, setModal };
})
