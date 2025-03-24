import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAffilateStore = defineStore('affilate', () => {
  

  const affilates = ref({
    current_percent: 0,
    total_earnings: 0,
    referrals: {},
  });
  function setAffilates(payload) {
    affilates.value = payload
  }

  
  return { affilates, setAffilates }
})
