<template>
  <section class="know mt-12">
    <div class="container">
      <div class="flex justify-between items-baseline pr-5">
        <h3 class="know-title max-w-[1421px] know-title font-bold text-8xl text-black xl:text-5xl sm:text-3xl">
          {{ t('know_title') }}
          <span>{{ t('know_titleSecond') }}</span>
        </h3>
        <div class="know-logo flex items-center ml-5">
          <img class="sm:w-4 sm:h-4" src="@/assets/img/header/logo.svg" alt="">
          <p class="ml-1 text-black font-bold text-4xl xl:text-2xl sm:text-base">TON</p>
        </div>
      </div>
      <div class="know-cards flex justify-between items-center flex-wrap">
        <div
          class="know-card w-96 h-[590px] bg-primary rounded-3xl mt-12 flex flex-col items-center text-white text-xl pt-11 overflow-x-hidden xl:w-72 xl:h-[450px] xl:text-base">
          <p v-html="t('know_one')">

          </p>
          <img class="mt-auto xl:w-3/4" src="@/assets/img/know/1.png" alt="">
        </div>
        <div style="border: 1.1307291984558105px solid #dde3e6;"
          class="know-card w-96 h-[590px] bg-white rounded-3xl mt-12 flex flex-col items-center text-black text-xl overflow-x-hidden xl:w-72 xl:h-[450px] xl:text-base">
          <img class="xl:w-3/4" src="@/assets/img/know/2.png" alt="">
          <p v-html="t('know_two')" class="max-w-[270px] mt-6 xl:max-w-[200px]"></p>
        </div>
        <div style="background: #1E2337;"
          class="know-card w-96 h-[590px] bg-white rounded-3xl mt-12 pt-11 flex flex-col items-center text-white text-xl overflow-x-hidden xl:w-72 xl:h-[450px] xl:text-base">
          <p v-html="t('know_three')" class="max-w-[280px] xl:max-w-[200px]">
          </p>
          <img class="mt-auto xl:w-3/4" src="@/assets/img/know/3.png" alt="">
        </div>

        <div style="border: 1.1307291984558105px solid #dde3e6;"
          class="know-card w-96 h-[590px] bg-white rounded-3xl mt-12 flex flex-col items-center text-black text-xl overflow-x-hidden xl:w-72 xl:h-[450px] xl:text-base">
          <img class="xl:w-3/4" src="@/assets/img/know/4.png" alt="">
          <p v-html="t('know_four')" class="mt-6 max-w-[250px] text-center xl:max-w-[200px]">

          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

onMounted(() => {
  ScrollTrigger.refresh()
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh()
  })
  gsap.registerPlugin(ScrollTrigger)
  let mm = gsap.matchMedia();
  mm.add("(min-width: 468px)", () => {
    gsap.from('.know-title', {
      scrollTrigger: {
        trigger: '.know',
        start: '-40% center',
        end: '+=500px',
        // scrub: true,
        // markers: true,
        // toggleActions: 'play none none reverse',
      },
      yPercent: 30,
      opacity: 0,
    });
    gsap.from('.know-logo', {
      scrollTrigger: {
        trigger: '.know',
        start: '-40% center',
        end: '+=500px',
        // scrub: true,
        // markers: true,
        // toggleActions: 'play none none reverse',
      },
      yPercent: 100,
      opacity: 0,
    });
    gsap.from('.know-cards', {
      scrollTrigger: {
        trigger: '.know',
        start: '30% center',
        end: '+=500px',
        // scrub: true,
        // markers: true,
        // toggleActions: 'play none none reverse',
      },
      yPercent: 10,
      opacity: 0,
    });
  })

  mm.add("(max-width: 467px)", () => {
    gsap.from('.know-title', {
      scrollTrigger: {
        trigger: '.know',
        start: '0% center',
        end: '+=500px',
        // scrub: true,
        // markers: true,
        // toggleActions: 'play none none reverse',
      },
      yPercent: 30,
      opacity: 0,
    });
    gsap.from('.know-logo', {
      scrollTrigger: {
        trigger: '.know',
        start: '0% center',
        end: '+=500px',
        // scrub: true,
        // markers: true,
        // toggleActions: 'play none none reverse',
      },
      yPercent: 100,
      opacity: 0,
    });
    gsap.from('.know-cards', {
      scrollTrigger: {
        trigger: '.know',
        start: '10% center',
        end: '+=500px',
        // scrub: true,
        // markers: true,
        // toggleActions: 'play none none reverse',
      },
      yPercent: 10,
      opacity: 0,
    });
  })

})
</script>

<style lang="scss">
.know-title {
  span {
    background: linear-gradient(to right, #2a82ea 0%, #1cc1fe 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

@media screen and (max-width: 1090px) {
  .know-cards {
    @apply justify-center;
  }
}
</style>