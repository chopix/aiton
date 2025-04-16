import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  

  const modal = ref(0);
  const selectedPlan = ref('')
  const setModal = (value, selectedPlan = '') => {
    modal.value = value;
    selectedPlan.value = selectedPlan;
  };

  
  return { modal, selectedPlan, setModal };
})
