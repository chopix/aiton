<template>
  <main class="main relative">
    <div class="container flex flex-col items-center">
      <h1
        class="main-title font-bold text-[200px] text-semiblack mt-36 xl:text-[140px] xl:mt-64 md:text-[80px] sm:text-[50px]">
        Ton
        AI Bot</h1>
      <p
        class="main-second-title main-gradient font-bold text-[200px] mt-[-130px] xl:text-[140px] xl:mt-[-100px] md:text-[80px] md:mt-[-50px] sm:text-[50px] sm:mt-[-30px]">
        {{ t('main_title') }}</p>
      <p
        class="main-subtitle text-center text-semibold text-3xl text-black max-w-[805px] xl:text-xl md:text-lg sm:text-base">
        {{ t('main_description') }}</p>
      <button v-if="!wallet" @click="store.openWalletModal" id="main-button"
        class="main-button mt-11 font-semibold text-3xl">{{
          t('connect_wallet') }}</button>
      <button @click="() => router.push('/cabinet/trading')" v-else id="main-button"
        class="main-button mt-11 font-semibold text-3xl">{{
          t('go_to') }}</button>

      <button @click="store.disconnectWallet">Disconnect</button>
    </div>
    <div class="main-infinite h-25 flex items-center mt-10 xl:mt-48 md:mt-60">
      <Vue3Marquee direction="reverse">
        <div class="flex items-center text-white text-2xl font-bold mr-20">
          <img src="@/assets/img/header/logo.svg" alt="Logo" class="h-10">
          <span class="ml-2">{{ t('main_anim') }}</span>
        </div>
        <div class="flex items-center text-white text-2xl font-bold mr-20">
          <img src="@/assets/img/header/logo.svg" alt="Logo" class="h-10">
          <span class="ml-2">{{ t('main_anim') }}</span>
        </div>
        <div class="flex items-center text-white text-2xl font-bold mr-20">
          <img src="@/assets/img/header/logo.svg" alt="Logo" class="h-10">
          <span class="ml-2">{{ t('main_anim') }}</span>
        </div>
        <div class="flex items-center text-white text-2xl font-bold mr-20">
          <img src="@/assets/img/header/logo.svg" alt="Logo" class="h-10">
          <span class="ml-2">{{ t('main_anim') }}</span>
        </div>
      </Vue3Marquee>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { Vue3Marquee } from 'vue3-marquee'
import gsap from 'gsap';
import { useI18n } from 'vue-i18n';
import { useWalletStore } from '@/stores/wallet-store';
import { storeToRefs } from 'pinia';
import router from '@/router';
import axios from 'axios';
import Modal from '../UI/Modal.vue';
import Cookies from 'js-cookie';

const store = useWalletStore()
const { wallet } = storeToRefs(store)



watch(wallet, async (newValue) => {
  console.log(Cookies.get('referal_id'))
  if (newValue && newValue.account.publicKey) {
    if (Cookies.get('referal_id')) {
      await axios.post('users', JSON.stringify({
        pub_key: newValue.account.publicKey,
        ref_id: Cookies.get('referal_id')
      })).then(res => {
      }).catch(e => {
        console.log(e)
      })
    } else {
      await axios.post('users', JSON.stringify({
        pub_key: newValue.account.publicKey,
      })).then(res => {
      }).catch(e => {
        console.log(e)
      })
    }

    // await axios.get(`users/${newValue.account.publicKey}`)
  }
})

const { t } = useI18n()


onMounted(async () => {
  if (wallet.value) {

  }
  const tl = gsap.timeline();
  tl.fromTo(
    '.main-title',
    {
      opacity: 0,
      y: 200,
    },
    {
      opacity: 1,
      y: 0,
    }
  ).fromTo('.main-second-title',
    {
      opacity: 0,
      y: -200,
    },
    {
      opacity: 1,
      y: 0,
    }).fromTo('.main-subtitle',
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
      }).fromTo('.main-button',
        {
          opacity: 0,
          y: -100,
        },
        {
          opacity: 1,
          y: 0,
        })
})

</script>

<style lang="scss" scoped>
.main-gradient {
  background: linear-gradient(to right, #2a82ea 0%, #1cc1fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.main-button {
  width: 408px;
  height: 101px;

  border: 1px solid #767676;
  border-radius: 22222px;
  color: #1e1e1e;
  transition: all 0.2s linear;

  &:hover {
    background-color: #767676;
    color: white;
  }
}

.main-infinite {
  background: linear-gradient(to right, #2a82ea 0%, #1cc1fe 100%);
}


@media screen and (max-width: 1466px) {
  .main-button {
    width: 250px;
    height: 60px;
    @apply text-xl;
  }
}
</style>
