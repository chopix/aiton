<template>
  <section class="steps mt-16">
    <div class="container flex flex-col items-center">
      <h3 class="steps-title font-bold text-[88px] md:text-6xl sm:text-4xl">{{ t('step_title') }}</h3>
      <div class="steps-cards mt-12 flex items-center justify-center gap-x-5 flex-wrap gap-y-5">
        <div
          class="step-card w-[400px] h-[395px] bg-[#e7f4ff] rounded-[38px] py-14 px-[40px] sm:w-[280px] sm:h-[300px]">
          <div class="flex justify-between items-center">
            <img class="sm:w-8 sm:h-8" src="@/assets/img/steps/1.svg" alt="">
            <div
              class="w-[107px] h-[38px] bg-primary rounded-3xl text-white font-medium text-xl flex justify-center items-center sm:w-[70px] sm:h-[25px] sm:text-base sm:rounded-xl">
              {{ t('step_step') }} 1</div>
          </div>
          <h4 class="step-card__title text-semiblack font-semibold text-3xl mt-10 sm:text-xl">{{ t('step_title_one') }}
          </h4>
          <p v-html="t('step_subtitle_one')"
            class="step-card__subtitle text-semiblack font-medium text-2xl mt-11 leading-10 sm:text-base"></p>
        </div>
        <div
          class="step-card w-[400px] h-[395px] bg-[#e7f4ff] rounded-[38px] py-14 px-[40px] sm:w-[280px] sm:h-[300px]">
          <div class="flex justify-between items-center">
            <img class="sm:w-8 sm:h-8" src="@/assets/img/steps/2.svg" alt="">
            <div
              class="w-[107px] h-[38px] bg-primary rounded-3xl text-white font-medium text-xl flex justify-center items-center sm:w-[70px] sm:h-[25px] sm:text-base sm:rounded-xl">
              {{ t('step_step') }} 2</div>
          </div>
          <h4 class="step-card__title text-semiblack font-semibold text-3xl max-w-[240px] mt-10 sm:text-xl">
            {{ t('step_title_two') }}
          </h4>
          <p class="step-card__subtitle text-semiblack font-medium text-2xl mt-11 leading-10 sm:text-base">{{
            t('step_subtitle_two') }}</p>
        </div>
        <div
          class="step-card w-[400px] h-[395px] bg-[#e7f4ff] rounded-[38px] py-14 px-[40px] sm:w-[280px] sm:h-[300px]">
          <div class="flex justify-between items-center">
            <img class="sm:w-8 sm:h-8" src="@/assets/img/steps/3.svg" alt="">
            <div
              class="w-[107px] h-[38px] bg-primary rounded-3xl text-white font-medium text-xl flex justify-center items-center sm:w-[70px] sm:h-[25px] sm:text-base sm:rounded-xl">
              {{ t('step_step') }} 3</div>
          </div>
          <h4 class="step-card__title text-semiblack font-semibold text-3xl max-w-[240px] mt-10 sm:text-xl">{{
            t('step_title_three') }}</h4>
          <p class="step-card__subtitle text-semiblack font-medium text-2xl mt-11 leading-10 sm:text-base">{{
            t('step_subtitle_three') }}</p>
        </div>
      </div>
      <button @click="store.openWalletModal" v-if="!wallet" class="steps-button mt-12 font-semibold text-4xl">{{
        t('connect_wallet') }}</button>
      <button v-else class="steps-button mt-12 font-semibold text-4xl">{{
        t('go_to') }}</button>
    </div>
  </section>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useI18n } from 'vue-i18n';
import {
  useTonConnectUI, useTonWallet
} from "@townsquarelabs/ui-vue";
import { useWalletStore } from '@/stores/wallet-store';
import { storeToRefs } from 'pinia';

const store = useWalletStore()
const { wallet } = storeToRefs(store)

const { t } = useI18n()

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.from('.steps-title', {
    scrollTrigger: {
      trigger: '.steps',
      start: '-20% center',
      end: '+=500px',
      // scrub: true,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
    yPercent: 50,
    opacity: 0,
  });
  gsap.from('.step-card', {
    scrollTrigger: {
      trigger: '.steps',
      start: '-10% center',
      end: '+=500px',
      // scrub: true,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
    yPercent: 35,
    opacity: 0,
  });
  gsap.from('.steps-button', {
    scrollTrigger: {
      trigger: '.steps',
      start: '30% center',
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
.steps-button {
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
  .steps-button {
    width: 300px;
    height: 80px;
    @apply text-2xl;
  }
}

@media screen and (max-width: 479.98px) {
  .steps-button {
    width: 200px;
    height: 60px;
    @apply text-base;
  }
}
</style>