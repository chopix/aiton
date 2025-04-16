import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAffilateStore = defineStore('affilate', () => {
  

  const affilates = ref({
    current_percent: 0,
    total_earnings: 0,
    total_earnings_usd: 0,
    referrals_by_level: {},
    total_referrals: 0
  });
  function setAffilates(payload) {
    affilates.value = payload
  }

  
  return { affilates, setAffilates }
})
