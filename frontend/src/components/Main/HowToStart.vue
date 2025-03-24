<template>
  <section class="start mt-12">
    <div class="container">
      <!-- Левая часть -->
      <div class="start-left">
        <h3 v-html="t('start_title')" class="start-title text-[86px] max-w-[770px] leading-[90px]">

        </h3>
        <div class="telegram flex items-center mt-6">
          <img class="w-20 h-20 mr-5" src="@/assets/img/start/telegram.svg" alt="">
          <div class="gradient font-bold text-8xl h-25">Telegram</div>
        </div>
        <img class="mt-6 start-left__img" src="@/assets/img/start/banner.jpg" alt="">
      </div>
    </div>

    <!-- Правая часть -->
    <div class="start-right flex flex-col justify-center">
      <div class="start-right__top flex items-center ml-10">
        <img class="w-16" src="@/assets/img/start/star.svg" alt="">
        <p class="font-bold text-white text-3xl ml-3">AI TON BOT</p>
        <p class="line font-bold text-white text-2xl ml-2">|</p>
        <p v-html="t('start_right_title')" class="after-line text-white text-base ml-5 max-w-60"></p>
      </div>
      <ul class="flex flex-col items-center mt-10">
        <li v-html="t('start_right_one')" class="mb-8 max-w-[756px] text-white text-3xl leading-10"></li>
        <li v-html="t('start_right_two')" class="mb-8 max-w-[756px] text-white text-3xl leading-10"></li>
        <li v-html="t('start_right_three')" class="mb-8 max-w-[756px] text-white text-3xl leading-10"></li>
        <li v-html="t('start_right_four')" class="mb-8 max-w-[756px] text-white text-3xl leading-10"></li>
        <li v-html="t('start_right_five')" class="max-w-[756px] text-white text-3xl leading-10"></li>
      </ul>
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
  gsap.from('.start-title', {
    scrollTrigger: {
      trigger: '.start',
      start: '-20% center',
      end: '+=500px',
      // scrub: true,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
    yPercent: 50,
    opacity: 0,
  });
  gsap.from('.telegram', {
    scrollTrigger: {
      trigger: '.start',
      start: '-20% center',
      end: '+=500px',
      // scrub: true,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
    yPercent: 100,
    opacity: 0,
  });
  gsap.from('.start-right', {
    scrollTrigger: {
      trigger: '.start',
      start: '-10% center',
      end: '+=500px',
      // scrub: true,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
    yPercent: 10,
    opacity: 0,
  });
  gsap.from('.start-left__img', {
    scrollTrigger: {
      trigger: '.start',
      start: '10% center',
      end: '+=500px',
      // scrub: true,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
    yPercent: 20,
    opacity: 0,
  });
})
</script>

<style lang="scss" scoped>
ul li {
  @apply max-w-[700px];
  position: relative;
  list-style: none;
  @apply pl-4;


  &::before {
    position: absolute;
    content: '';
    @apply left-[-30px];
    @apply top-2;
    @apply w-8;
    @apply h-8;
    background-image: url("@/assets/img/start/list.svg");
    background-size: cover;
  }
}

.start {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
}

.start-left {
  flex: 1;
}

.start-right {
  position: absolute;
  right: -60px;
  top: 0;
  width: 600px;
  height: 930px;
  /* Задайте ширину плашки */
  background: linear-gradient(180deg, #007DFF 0%, #79C9FF 100%);
  border-radius: 69px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);


  li {
    @apply text-xl;
    @apply max-w-[400px];
  }
}

@media screen and (max-width: 1330px) {
  .start-title {
    max-width: 450px;
    font-size: 50px;
    margin-top: 20px;
    line-height: 57px;
  }

  .telegram {
    width: 60px;
    font-size: 20px;

    div {
      font-size: 50px;
      display: flex;
      align-items: center;
    }

    margin-top: -1px;
  }

  .start-right__top p {
    max-width: 250px;
    font-size: 15px;


  }

  .start-left img {
    width: 450px;
  }

  .start-right {
    right: -100px;
    width: 520px;
    height: 740px;

    &__top {
      padding-top: 15px;
      @apply ml-2;
    }
  }

  .start-right ul li {
    font-size: 15px;
    max-width: 330px;
    @apply pl-0;
    margin-left: -30px;
    @apply mb-3;

    &::before {
      position: absolute;
      content: '';
      @apply left-[-38px];
      @apply top-2;
      @apply w-8;
      @apply h-8;
      background-image: url("@/assets/img/start/list.svg");
      background-size: cover;
    }
  }
}


@media screen and (max-width: 991.98px) {
  .start-left img {
    display: none;
  }

  .telegram img {
    display: block;
  }

  .start-right {
    position: relative;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .start {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .start-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .telegram {
    width: 300px;
    @apply mb-5;

    img {
      width: 84px;
    }
  }

  .start-right ul li {
    @apply pl-10;

    &::before {
      left: -19px;
    }

    // .start-right__top{
    //   p:nth-child(3){
    //     margin-right: 500px;
    //   }
    // }
  }

  .after-line {
    @apply ml-2;
  }
}

@media screen and (max-width: 767.98px) {
  .start-title {
    line-height: 45px;
    font-size: 40px;
  }
}


@media screen and (max-width: 540px) {
  .start-right ul li {
    font-size: 13px;
    padding-left: 70px;

    &::before {
      left: 30px;
      background-size: 15px;
      background-repeat: no-repeat;
    }
  }

  .start-right {
    width: 350px;
    border-radius: 15px;
  }

  .start-right__top {
    img {
      display: none;
    }

    p:nth-child(2) {
      font-size: 25px;
    }

    p {
      font-size: 18px;
      margin-left: -52px;

    }

    p:nth-child(3) {
      display: none;
    }

    flex-direction: column;
    align-items: first baseline;

  }
}
</style>