<template>
  <section class="more">
    <CabinetHeader class="sm:hidden" />
    <div class="container">
      <h2 class="more-title mt-6 text-primary font-medium text-[60px] md:text-[30px]">{{ t('more_page') }}</h2>
      <a @click.prevent="openTask('https://t.me/AiTonBotRoom')" target="_blank"
        class="block one w-full flex justify-between items-center h-[111px] cursor-pointer">
        <div class="flex items-center">
          <div class="w-[50px] md:w-[20px]">
            <img class="md:w-[30px] md:h-[30px]" src="@/assets/img/cabinet/telegram.svg" alt="">
          </div>
          <div class="flex flex-col items-start ml-5">
            <h4 class="text-[30px] text-[#12172c] font-medium md:text-[15px]">{{ t('news') }}</h4>
            <p class="text-lg text-[#898B96] md:text-base">t.me/AiTonBotRoom</p>
          </div>
        </div>
        <svg width="19" height="29" viewBox="0 0 19 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M13.4572 14.4612L1.25218 3.88094C0.452479 3.18771 0.413 1.96012 1.1665 1.21694C1.84117 0.551507 2.91418 0.516998 3.63021 1.1377L18.3356 13.8854C18.6861 14.1892 18.6861 14.7331 18.3356 15.0369L3.63021 27.7846C2.91418 28.4053 1.84117 28.3708 1.1665 27.7054C0.413 26.9622 0.45248 25.7346 1.25218 25.0414L13.4572 14.4612Z"
            fill="#12172C" />
        </svg>
      </a>
      <a @click.prevent="openTask('https://t.me/AiTonBotRoom')" target="_blank"
        class="block w-full flex justify-between items-center h-[111px] cursor-pointer">
        <div class="flex items-center">
          <div class="w-[50px] md:w-[20px]">
            <img class="md:w-[30px] md:h-[30px]" src="@/assets/img/cabinet/chat.svg" alt="">
          </div>
          <div class="flex flex-col ml-5 items-start">
            <h4 class="text-[30px] text-[#12172c] font-medium md:text-[15px]">{{ t('chat') }}</h4>
            <p class="text-lg text-[#898B96] md:text-base">{{ t('chat_subtitle') }}</p>
          </div>
        </div>
        <svg width="19" height="29" viewBox="0 0 19 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M13.4572 14.4612L1.25218 3.88094C0.452479 3.18771 0.413 1.96012 1.1665 1.21694C1.84117 0.551507 2.91418 0.516998 3.63021 1.1377L18.3356 13.8854C18.6861 14.1892 18.6861 14.7331 18.3356 15.0369L3.63021 27.7846C2.91418 28.4053 1.84117 28.3708 1.1665 27.7054C0.413 26.9622 0.45248 25.7346 1.25218 25.0414L13.4572 14.4612Z"
            fill="#12172C" />
        </svg>
      </a>
      <a @click.prevent="openTask('https://t.me/AiTonBotRoom')" target="_blank"
        class="block w-full flex justify-between items-center h-[111px] cursor-pointer">
        <div class="flex items-center">
          <div class="w-[50px] md:w-[20px]">
            <img class="md:w-[30px] md:h-[25px]" src="@/assets/img/cabinet/list.png" alt="">
          </div>
          <div class="flex flex-col ml-5">
            <h4 class="text-[30px] text-[#12172c] font-medium md:text-[15px]">{{ t('user_agrement') }}</h4>
            <p class="text-lg text-[#898B96] md:text-base">{{ t('user_agrement_subtitle') }} 21.01.2025</p>
          </div>
        </div>
        <svg width="19" height="29" viewBox="0 0 19 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M13.4572 14.4612L1.25218 3.88094C0.452479 3.18771 0.413 1.96012 1.1665 1.21694C1.84117 0.551507 2.91418 0.516998 3.63021 1.1377L18.3356 13.8854C18.6861 14.1892 18.6861 14.7331 18.3356 15.0369L3.63021 27.7846C2.91418 28.4053 1.84117 28.3708 1.1665 27.7054C0.413 26.9622 0.45248 25.7346 1.25218 25.0414L13.4572 14.4612Z"
            fill="#12172C" />
        </svg>
      </a>
    </div>
    <CabinetHeaderMobile class="sm:flex" />
  </section>
</template>

<script setup lang="ts">
import CabinetHeader from '@/components/Cabinet/CabinetHeader.vue';
import CabinetHeaderMobile from '@/components/Cabinet/CabinetHeaderMobile.vue';
import { useTelegram } from '@/services/telegram';
import { useI18n } from 'vue-i18n';

const { tg } = useTelegram()
const { t } = useI18n()

function openTask(task) {
  if (task.includes('t.me')) {
    tg.openTelegramLink(task)
  } else {
    tg.openLink(task)
  }
}

</script>

<style scoped lang="scss">
.block {
  border-bottom: 2px solid #EAECF0;
}

.one {
  border-top: 2px solid #EAECF0;
}
</style>