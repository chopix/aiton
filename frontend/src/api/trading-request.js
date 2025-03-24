import { useTradingStore } from "@/stores/trading-store"
import axios from "axios"

export const getTrading = async (pub_key) => {
  await axios.get(`users/by-pubkey/${String(pub_key)}`).then(res => {
    const store = useTradingStore()
    store.setTrading(res.data.data)
    store.calculateTotalAmount()
    console.log(res.data)
  }).catch(e => console.log(e))
}