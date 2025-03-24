<template>
  <section class="welcome mt-12">
    <div class="container flex flex-col items-center">
      <div class="welcome-logo flex items-center">
        <img class="w-28 h-28 lg:w-16 lg:h-16 md:w-10 md:h-10" src="@/assets/img/header/logo.svg" alt="">
        <p class="ml-4 text-black font-bold text-7xl lg:text-5xl md:text-3xl md:ml-2">TON</p>
      </div>
      <h1 class="welcome-title font-bold text-[100px] text-semiblack lg:text-[70px] md:text-[40px] sm:text-[25px]">
        {{ t('welcome_title') }}
      </h1>
      <p
        class="main-gradient welcome-subtitle font-bold text-[95px] mt-[-25px] lg:text-[65px] md:text-[35px] md:mt-[-5px] sm:text-[20px]">
        AI TON
        PLATINUM</p>
      <button @click="store.openWalletModal" v-if="!wallet" class="welcome-button mt-4 font-semibold text-4xl">{{
        t('connect_wallet') }}</button>
      <button v-else class="welcome-button mt-4 font-semibold text-4xl">{{ t('go_to') }}</button>
    </div>
  </section>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useI18n } from 'vue-i18n';
import { useWalletStore } from '@/stores/wallet-store';
import { storeToRefs } from 'pinia';

const store = useWalletStore();
const { wallet } = storeToRefs(store);

const { t } = useI18n()
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.from('.welcome-logo', {
    scrollTrigger: {
      trigger: '.welcome',
      start: '-40% center',
      end: '+=500px',
      // scrub: true,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
    yPercent: 100,
    opacity: 0,
  });
  gsap.from('.welcome-title', {
    scrollTrigger: {
      trigger: '.welcome',
      start: '-37% center',
      end: '+=500px',
      // scrub: true,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
    yPercent: 60,
    opacity: 0,
  });
  gsap.from('.welcome-subtitle', {
    scrollTrigger: {
      trigger: '.welcome',
      start: '-35% center',
      end: '+=500px',
      // scrub: true,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
    yPercent: 60,
    opacity: 0,
  });
  gsap.from('.welcome-button', {
    scrollTrigger: {
      trigger: '.welcome',
      start: '0% center',
      end: '+=500px',
      // scrub: true,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
    yPercent: 40,
    opacity: 0,
  });
})
</script>

<style lang="scss" scoped>
.welcome-button {
  width: 408px;
  height: 101px;

  background: linear-gradient(to right, #2a82ea 0%, #1cc1fe 100%);
  border-radius: 22222px;
  color: white;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.05);
  }
}

@media screen and (max-width: 991.98px) {
  .welcome-button {
    width: 250px;
    height: 60px;
    @apply text-xl;
  }
}

@media screen and (max-width: 479.98px) {
  .welcome-button {
    width: 150px;
    height: 40px;
    @apply text-sm;
  }
}
</style>