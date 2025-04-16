import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  

  const modal = ref(0);
  const selectedPlan = ref('')
  const setModal = (value, plan = '') => {
    modal.value = value;
    selectedPlan.value = plan;
  };

  
  return { modal, selectedPlan, setModal };
})
