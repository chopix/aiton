import { useAffilateStore } from "@/stores/affilate-store"
import axios from "axios"

export const getAffilates = async (pub_key) => {
  await axios.get(`users/by-pubkey/${String(pub_key)}/referrals`).then(res => {
    const store = useAffilateStore()
    store.setAffilates(res.data.data)
    console.log(res.data)
  }).catch(e => console.log(e))
}