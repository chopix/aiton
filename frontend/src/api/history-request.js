import { useHistoryStore } from "@/stores/history-store"
import axios from "axios"

export const getHistory = async (pub_key) => {
  await axios.get(`users/by-pubkey/${String(pub_key)}/operations?page=1&page_size=100`).then(res => {
    const store = useHistoryStore()
    store.setHistory(res.data.data.operations)
    console.log(res.data)
  }).catch(e => console.log(e))
}