import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useTonConnectUI, useTonWallet } from '@townsquarelabs/ui-vue';

export const useWalletStore = defineStore('wallet', () => {
  

  const { tonConnectUI } = useTonConnectUI();
  const wallet = useTonWallet();

  const disconnectWallet = async () => {
    if (tonConnectUI) {
      await tonConnectUI.disconnect();
    }
  }


  const openWalletModal = () => {
    if (tonConnectUI) {
      tonConnectUI.openModal();
    } else {
      console.error("TonConnectUI instance is not available.");
    }
  };

  
  return { wallet, openWalletModal, disconnectWallet }
})
