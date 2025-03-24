<template>
  <section class="why pt-12 bg-[#12172C] pb-12">
    <div class="container">
      <h3 v-html="t('why_title')" class="why-title text-white font-bold text-7xl"></h3>
      <div class="why-cards pt-12 flex justify-between flex-wrap">
        <div class="why-card bg-[#1e2337] rounded-[30px] w-[450px] h-[570px] py-10 px-10">
          <img src="@/assets/img/why/1.svg" alt="">
          <h4 class="why-card__title text-white font-bold text-4xl mt-5">{{ t('why_title_one') }}</h4>
          <p class="why-card__subtitle max-w-[467px] font-medium text-white text-2xl mt-12">{{ t('why_subtitle_one') }}
          </p>
        </div>
        <div class="why-card bg-[#1e2337] rounded-[30px] w-[450px] h-[570px] py-10 px-10">
          <img src="@/assets/img/why/2.svg" alt="">
          <h4 class="why-card__title text-white font-bold text-4xl mt-5">{{ t('why_title_two') }}</h4>
          <p class="why-card__subtitle max-w-[467px] font-medium text-white text-2xl mt-12">{{ t('why_subtitle_two') }}
          </p>
        </div>
        <div class="why-card bg-[#1e2337] rounded-[30px] w-[450px] h-[570px] py-10 px-10">
          <img src="@/assets/img/why/3.svg" alt="">
          <h4 class="why-card__title text-white font-bold text-4xl mt-5">{{ t('why_title_three') }}</h4>
          <p class="why-card__subtitle max-w-[467px] font-medium text-white text-2xl mt-12">{{ t('why_subtitle_three')
            }}</p>
        </div>
        <div class="why-card bg-[#1e2337] rounded-[30px] w-[450px] h-[570px] py-10 px-10 mt-6">
          <img src="@/assets/img/why/4.svg" alt="">
          <h4 class="why-card__title text-white font-bold text-4xl mt-5">{{ t('why_title_four') }}</h4>
          <p class="why-card__subtitle max-w-[467px] font-medium text-white text-2xl mt-12">{{ t('why_subtitle_four') }}
          </p>
        </div>
        <div class="why-card bg-[#1e2337] rounded-[30px] w-[450px] h-[570px] py-10 px-10 mt-6">
          <img src="@/assets/img/why/5.svg" alt="">
          <h4 class="why-card__title text-white font-bold text-4xl mt-5">{{ t('why_title_five') }}</h4>
          <p class="why-card__subtitle max-w-[467px] font-medium text-white text-2xl mt-12">{{ t('why_subtitle_five') }}
          </p>
        </div>
        <div class="why-card bg-[#1e2337] rounded-[30px] w-[450px] h-[570px] py-10 px-10 mt-6">
          <img src="@/assets/img/why/6.svg" alt="">
          <h4 class="why-card__title text-white font-bold text-4xl mt-5">{{ t('why_title_six') }}</h4>
          <p class="why-card__subtitle max-w-[467px] font-medium text-white text-2xl mt-12">{{ t('why_subtitle_six') }}
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
  gsap.registerPlugin(ScrollTrigger)
  gsap.from('.why-title', {
    scrollTrigger: {
      trigger: '.why',
      start: '-20% center',
      end: '+=500px',
      // scrub: true,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
    yPercent: 40,
    opacity: 0,
  });
  gsap.from('.why-card', {
    scrollTrigger: {
      trigger: '.why',
      start: '10% center',
      end: '+=500px',
      // scrub: true,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
    yPercent: 15,
    opacity: 0,
  });
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1466px) {
  .why-cards {
    justify-content: center;
    @apply gap-5;

  }

  .why-card {
    margin-top: 0 !important;
  }

}


@media screen and (max-width: 767.98px) {
  .why-title {
    font-size: 30px;

  }
}

@media screen and (max-width: 479.98px) {


  .why-card__title {
    font-size: 20px;
  }

  .why-card__subtitle {
    font-size: 15px;
    margin-top: 10px;


  }

  .why-card img {
    width: 50px;
    height: 50px;
  }

  .why-card {
    height: 430px;
    width: 350px;
    @apply py-5;
    @apply px-5;
  }

}

@media screen and (max-width: 390px) {
  .why-card__subtitle {
    font-size: 12px;
    margin-top: 10px;
    line-height: 30px;
  }
}
</style>