import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTradingStore = defineStore('trading', () => {
  

  const trading = ref();
  function setTrading(payload) {
    trading.value = payload
  }
  const tradeAmount = ref(0)

  const calculateTotalAmount = () => {
    if(trading.value.investments) tradeAmount.value = trading.value.investments.reduce((sum, investment) => sum + investment.amount, 0)
    
  }

  
  return { trading, setTrading, calculateTotalAmount, tradeAmount }
})
