<template>
  <section class="affilate min-h-screen flex flex-col pb-24">
    <CabinetHeader class="sm:hidden" />
    <div class="container">
      <h3 class="affilate-title mt-[26px] text-primary font-medium text-[60px] sm:text-[40px]">Рефералы</h3>
      <p class="affilate-subtitle text-[#B8BAC0] font-medium text-[40px] sm:text-[20px] max-w-[689px]"><span
          class="text-primary">Делитесь</span> ссылкой и
        <span class="text-primary">получайте {{ affilates.current_percent }}%</span>
        от баллов
        ваших друзей
      </p>
      <div class="affilate-block mt-3 w-full h-[610px] rounded-3xl flex xl:flex-col xl:h-[760px]">
        <div class="flex flex-col justify-between affilate-left h-full p-[30px] pb-5">
          <div class="xl:flex xl:justify-between xl:items-center">
            <img
              class="affilate-avatar w-[120px] h-[120px] rounded-[18px] xl:w-[80px] xl:h-[80px] sm:w-[60px] sm:h-[60px]"
              :src="user && user.photo_url ? user.photo_url : '@/assets/img/cabinet/list.png'" alt="">
            <div>
              <p class="affilate-referals mt-[30px] text-xl text-white xl:mt-0">Прибыль от рефералов</p>
              <p class="affilate-cash font-medium text-white text-[40px] xl:text-[25px]">{{ affilates.total_earnings }}
                TON
              </p>
            </div>
          </div>
          <button @click="modalInvite(true)"
            class="w-[300px] h-[60px] bg-white rounded-2xl font-semibold text-[#0098ea] text-2xl xl:hidden">Пригласить</button>
        </div>
        <div class="affilate-border xl:hidden"></div>
        <div class="affilate-right p-[30px] w-full">
          <div class="flex justify-between w-full">
            <p class="font-medium text-2xl text-white">Ваши рефералы</p>
            <p class="font-medium text-2xl text-white">{{ affilates.total_referrals }}</p>
          </div>
          <div class="affilate-referals flex flex-col overflow-y-auto h-[530px] mt-5 gap-y-2">
            <CabinetAffilate :avatar="user && user.photo_url ? user.photo_url : '@/assets/img/cabinet/list.png'"
              nick="chopix" :friends="118" :profit="1200" :days="102" :invest="39.55" />
          </div>
        </div>
      </div>
      <button @click="modalInvite(true)"
        class="w-full h-[60px] bg-primary mt-5 rounded-2xl font-semibold text-white text-2xl hidden xl:block">Пригласить</button>
    </div>
    <CabinetHeaderMobile class="sm:flex" />
    <Modal v-show="isModalInvite && modal"
      class="max-w-[550px] w-full h-[300px] bg-white flex flex-col justify-between">
      <div>
        <div class="flex w-full justify-between">
          <p class="text-primary text-3xl">Ваша реферальная ссылка</p>
          <svg @click="modalInvite(false)" class="cursor-pointer hover-svg" width="36" height="36" viewBox="0 0 36 36"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect class="change-bg" x="0.75" y="0.75" width="34.5" height="34.5" rx="17.25" />
            <rect x="0.75" y="0.75" width="34.5" height="34.5" rx="17.25" stroke="#0098EA" stroke-width="1.5" />
            <path d="M10.4896 12.0104L12.0868 10.4132L25.6633 23.9896L24.0661 25.5868L10.4896 12.0104Z"
              fill="#0098EA" />
            <path d="M12.0868 25.5868L10.4896 23.9896L24.0661 10.4132L25.6633 12.0104L12.0868 25.5868Z"
              fill="#0098EA" />
          </svg>
        </div>
        <p class="text-2xl mt-5 break-all">
          {{ `${VITE_BOT_URL}?start=${user.id}` }}
        </p>
      </div>
      <button @click="copyToClipboard(`${VITE_BOT_URL}?start=${user.id}`)"
        class="w-full h-[60px] bg-primary mt-5 rounded-2xl font-semibold text-white text-2xl">Скопировать</button>
    </Modal>
  </section>
</template>

<script setup lang="ts">
import CabinetHeader from '@/components/Cabinet/CabinetHeader.vue';
import CabinetAffilate from '@/components/Cabinet/CabinetAffilate.vue';
import { useTelegram } from '@/services/telegram';
import CabinetHeaderMobile from '@/components/Cabinet/CabinetHeaderMobile.vue';
import { useWalletStore } from '@/stores/wallet-store';
import { onMounted, watch } from 'vue';
import { getAffilates } from '@/api/affilate-request';
import { storeToRefs } from 'pinia';
import { useAffilateStore } from '@/stores/affilate-store';
import Modal from '@/components/UI/Modal.vue';
import { ref } from 'vue';
import { useModalStore } from '@/stores/modal-store';

const copyToClipboard = async (value: any) => {
  if (value && value.length > 0) {
    try {
      await navigator.clipboard.writeText(String(value));
    } catch (err) {
      console.log(err);
    }
  }
};

const { user } = useTelegram()
const walletStore = useWalletStore()
const { wallet } = storeToRefs(walletStore);
const store = useAffilateStore()
const { affilates } = storeToRefs(store)
const modalStore = useModalStore()
const { modal } = storeToRefs(modalStore);
const { tg } = useTelegram()
const VITE_BOT_URL = import.meta.env.VITE_BOT_URL;

const isModalInvite = ref(false);
function modalInvite(state) {
  // modalStore.setModal(state);
  // isModalInvite.value = state;
  const inviteLink = `${VITE_BOT_URL}?startapp=${user.id}`
  const shareText = `Join me on this awesome Telegram mini app!`;
  const fullUrl = `https://t.me/share/url?url=${encodeURIComponent(inviteLink)}&text=${encodeURIComponent(shareText)}`
  tg.openTelegramLink(fullUrl)
}


watch(
  () => walletStore.wallet,
  async (wallet) => {
    if (wallet && wallet.account?.publicKey) {
      await getAffilates(wallet.account.publicKey);
    }
  },
  { immediate: true } // Выполнит проверку сразу после монтирования
);



</script>

<style scoped lang="scss">
.hover-svg {
  .change-bg {
    transition: all 0.3s;
    fill: white;
  }

  &:hover {
    .change-bg {
      fill: rgb(197, 197, 197);
    }
  }
}

.affilate {
  &-block {
    background: linear-gradient(54deg, rgba(45, 131, 236, 1) 0%, rgba(0, 212, 255, 1) 100%);
  }

  &-avatar {
    border: 3px solid #ffffff;
  }

  &-border {
    @apply h-full;
    width: 1.5px;
    background: rgba(225, 225, 225, 0.30000001192092896);
  }
}

button {
  transition: all 0.3s linear;

  &:hover {
    filter: brightness(0.7);
  }
}
</style>