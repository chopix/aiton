<template>
  <section class="reviews mt-12 bg-[#12172C]">
    <div class="container flex flex-col items-center pt-20">
      <h3 v-html="t('reviews_title')" class="reviews-title text-white text-8xl font-bold text-center">
      </h3>
      <p v-html="t('reviews_subtitle')" class="reviews-subtitle text-3xl text-white mt-5 text-center max-w-[970px]">
      </p>
      <div class="reviews-wrapper mt-11 flex flex-col gap-y-5">
        <div class="reviews-block flex items-end">
          <img class="mr-5" src="@/assets/img/reviews/ava.svg" alt="">
          <div class="w-[1012px] h-[103px] rounded-lg bg-white py-3 pl-5">
            <h4 class="font-semibold text-lg">{{ t('reviews_title_one') }}</h4>
            <p class="text-[#747474] text-base mt-3">{{ t('reviews_subtitle_one') }}</p>
          </div>
        </div>
        <div class="reviews-block flex items-end">
          <img class="mr-5" src="@/assets/img/reviews/ava.svg" alt="">
          <div class="w-[1012px] h-[103px] rounded-lg bg-white py-3 pl-5">
            <h4 class="font-semibold text-lg">{{ t('reviews_title_two') }}</h4>
            <p class="text-[#747474] text-base mt-3">{{ t('reviews_subtitle_two') }}</p>
          </div>
        </div>
        <div class="reviews-block flex items-end">
          <img class="mr-5" src="@/assets/img/reviews/ava.svg" alt="">
          <div class="w-[1012px] h-[103px] rounded-lg bg-white py-3 pl-5">
            <h4 class="font-semibold text-lg">{{ t('reviews_title_three') }}</h4>
            <p class="text-[#747474] text-base mt-3">
              {{ t('reviews_subtitle_three') }}
            </p>
          </div>
        </div>
        <div class="reviews-block flex items-end">
          <img class="mr-5" src="@/assets/img/reviews/ava.svg" alt="">
          <div class="w-[1012px] h-[103px] rounded-lg bg-white py-3 pl-5">
            <h4 class="font-semibold text-lg">{{ t('reviews_title_four') }}</h4>
            <p class="text-[#747474] text-base mt-3">
              {{ t('reviews_subtitle_four') }}
            </p>
          </div>
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
  gsap.from('.reviews-title', {
    scrollTrigger: {
      trigger: '.reviews',
      start: '-20% center',
      end: '+=500px',
      // scrub: true,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
    yPercent: 50,
    opacity: 0,
  });
  gsap.from('.reviews-subtitle', {
    scrollTrigger: {
      trigger: '.reviews',
      start: '-15% center',
      end: '+=500px',
      // scrub: true,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
    yPercent: 50,
    opacity: 0,
  });
  gsap.from('.reviews-block', {
    scrollTrigger: {
      trigger: '.reviews',
      start: '20% center',
      end: '+=500px',
      // scrub: true,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
    yPercent: 100,
    opacity: 0,
  });
})
</script>

<style lang="scss" scoped>
@media screen and (max-width:1100px) {
  .reviews-block div {
    width: 700px !important;
    height: 150px;
    @apply pr-5;

  }

  .reviews-title {
    @apply text-7xl
  }
}

@media screen and (max-width: 767.98px) {
  .reviews-block div {
    width: 420px !important;
    height: 180px;
  }

  .reviews-title {
    font-size: 30px;
  }

  .reviews-subtitle {
    font-size: 15px;
    line-height: 24px;
  }
}

@media screen and (max-width: 479.98px) {
  .reviews-block div {
    width: 300px !important;
    height: 250px;
  }

  .reviews-block img {
    @apply mr-3;
    width: 34px;
  }

}
</style>